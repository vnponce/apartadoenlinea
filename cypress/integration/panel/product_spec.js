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
    cy.findByLabelText(/nombre/i).type('nuevo pan');
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
});
