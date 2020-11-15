describe('test right panel', () => {
  beforeEach(() => {
    cy.refreshDatabase();
    // const products = [
    //   {
    //     name: 'primer pan',
    //     price: 10,
    //   },
    //   {
    //     name: 'segundo pan',
    //     price: 20,
    //   },
    // ];
    //
    // cy.createOrderWithProducts({
    //   products,
    // });
  });
  it('should show panel when user add product-bread to cart', () => {
    const product = cy.create('App\\Product', {
      name: 'nice product',
      price: 13,
    });
    cy.login();

    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByRole('button', { name: /poner en la charola/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('.product-side-panel .panel').should('not.be.visible');
    cy.get('#charola').click();
    cy.wait(300);
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('.product-side-panel .panel').should('be.visible');
    cy.findAllByTestId('list-item-1').within(() => {
        // probar que sean los productos en lisatados.
        cy.get('.name').contains('nice product');
        cy.get('.quantity').contains('1');
        cy.get('.price').contains('$13.00');
    })
  });


  // probar que el button este hasta abajo con el total siempre visible aun exista scroll dentro del listdo
});
