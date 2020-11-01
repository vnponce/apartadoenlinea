describe('Dashboard', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });

  it('should see listed orders', () => {
    cy.create('App\\Product', {
      name: 'awesome bread',
      price: 100,
    }).then((product) => {
      cy.createOrder({
        productId: product.id,
        productPrice: product.price,
      });
    });
    cy.login();

    cy.visit('/admin');
    cy.php(`
        App\\Order::first()
    `).then((order) => {
      cy.contains(order.name);
      cy.contains('Creado');
      cy.contains('Pendiente');
    });
  });
});
