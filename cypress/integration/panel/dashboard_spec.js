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
  it('should show custom message in specific orders', () => {
    cy.create('App\\Product', {
      name: 'awesome bread',
      price: 100,
    }).then((product) => {
      cy.createOrder({
        productId: product.id,
        productPrice: product.price,
        customMessage: 'friki friki',
      });
    });
    cy.login();

    cy.visit('/admin');
    cy.findByText('Bernal').click();
    cy.get('#dash-content').within(() => {
        cy.contains('friki friki');
    });
    // cy.php(`
    //     App\\Order::first()
    // `).then((order) => {
    //   cy.contains(order.name);
    //   cy.contains('Creado');
    //   cy.contains('Pendiente');
    // });
  });
});
