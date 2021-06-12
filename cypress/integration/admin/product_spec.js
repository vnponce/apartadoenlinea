const {tableRowSelector} = require("../common");
describe('Dashboard/Products', () => {
  beforeEach(() => {
    cy.refreshDatabase();
    cy.create('App\\Product', {
      name: 'nice product',
      price: 13,
    });
    cy.login();
    cy.visit('/admin/products');
  });

  it('should see listed listed products', () => {
    cy.contains('nice product');
    cy.contains('$13.00');
  });
  it('should create products', () => {
    cy.findByRole('button', { name: '+' }).click();
    cy.findByLabelText(/nombre de producto/i).type('nuevo pan');
    cy.findByLabelText(/descripci.n/i).type('descripcion del pan');
    cy.findByLabelText(/ingredientes/i).type('azucar, dulces, colores');
    cy.findByLabelText(/precio/i).type('8');
    cy.findByLabelText(/disponible/i).click({ force: true });
    cy.findByLabelText(/favorito/i).click({ force: true });
    cy.findByLabelText(/personalizable/i).click({ force: true });

    cy.findByRole('button', { name: /crear/i }).click();

    cy.php(`
        App\\Product::latest()->first()
    `).then(({
      name, description, ingredients, price, available, favorite, customizable,
    }) => {
      expect(name).to.have.string('nuevo pan');
      expect(description).to.have.string('descripcion del pan');
      expect(ingredients).to.have.string('azucar, dulces, colores');
      expect(price).to.be.eq(800);
      expect(available).to.be.eq(true);
      expect(favorite).to.be.eq(true);
      expect(customizable).to.be.eq(true);
    });
  });
  it('should edit product', () => {
    cy.contains('nice product').click();
    cy.get('#dash-content').within(() => {
      cy.contains('nice product');
      cy.contains('$13.00');
      cy.contains('Disponible');
      cy.contains('Favorito');
      cy.contains('Personalizable');

      cy.findByRole('button', { name: /editar/i }).click();
      cy.findByLabelText(/personalizable/i).click({ force: true });
      cy.findByRole('button', { name: /editar/i }).click();
    });

    // cy.wait(3000);
    cy.php(`
        App\\Product::first()
    `).then(({
      customizable,
    }) => {
      expect(customizable).to.be.eq(false);
    });
  });

  it('should filter by name', () => {
      cy.create('App\\Product', {
          name: 'rico pan',
      }).then((product) => {
          cy.create('App\\Product', 10);
          cy.log('product =>', product);
          const {id, name} = product;
          cy.login();

          cy.visit('/admin/products');
          cy.get(tableRowSelector).should('have.length', 10);
          cy.findByLabelText(/nombre/i).type(`${name}{enter}`);
          cy.get(tableRowSelector).should('have.length', 1);
          cy.get(`${tableRowSelector}[id=${id}]`).contains('rico pan');
          cy.findByLabelText(/nombre/i).should('have.value', `${name}`);
      });
  });
});
