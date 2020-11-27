import moment from 'moment';

describe('Dashboard', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });

  const tableRowSelector = '#main-contents table tbody tr';

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
  it('should filter by uuid', () => {
    cy.create('App\\Order', {
      name: 'Abel',
    }).then((order) => {
      cy.create('App\\Order', 10);
      cy.log('order =>', order);
      const { id } = order;
      const { uuid } = order;
      cy.login();

      cy.visit('/admin');
      cy.get(tableRowSelector).should('have.length', 11);
      cy.findByLabelText(/id/i).type(`${uuid}{enter}`);
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
    });
  });
  it('should filter by store', () => {
    cy.create('App\\Store', {
      name: 'First Store',
    }).then((store) => {
      cy.create('App\\Order', 10);
      cy.create('App\\Order', {
        name: 'Abel',
        store_id: store.id,
      }).then((order) => {
        cy.log('order =>', order);
        const { id } = order;
        // const storeId = order.store_id;
        cy.login();

        cy.visit('/admin');
        // cy.findByLabelText(/sucursal/i).type(`${uuid}{enter}`);
        cy.get(tableRowSelector).should('have.length', 11);

        cy.selectStore();
        cy.findByRole('button', { name: /buscar/i }).click();
        cy.get(tableRowSelector).should('have.length', 1);
        cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
        cy.get(`${tableRowSelector}[id=${id}]`).contains('First Store');
      });
    });
  });
  it('should filter by date', () => {
    cy.log('date =>', moment().format('Y-MM-DD H:mm:ss'));
    cy.create('App\\Order', {
      name: 'Abel',
      date: moment().format('Y-MM-DD H:mm:ss'),
      // date: moment().format('Y-m-d H:i:s'),
    }).then((order) => {
      // cy.log('date =>', moment().add(1, 'd').format('Y-MM-DD H:mm:ss'));
      cy.create('App\\Order', 10, {
        date: moment().add(1, 'd').format('Y-MM-DD H:mm:ss'),
      });
      const { id, date } = order;
      cy.login();

      cy.visit('/admin');
      cy.get(tableRowSelector).should('have.length', 11);
      cy.selectDate();
      cy.findByRole('button', { name: /buscar/i }).click();
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
    });
  });
  it('should filter by status', () => {
    cy.create('App\\Order', {
      name: 'Abel',
      status: 'delivered',
    }).then((order) => {
      // cy.log('date =>', moment().add(1, 'd').format('Y-MM-DD H:mm:ss'));
      cy.create('App\\Order', 10);
      const { id } = order;
      cy.login();

      cy.visit('/admin');
      cy.get(tableRowSelector).should('have.length', 10);
      cy.selectStatus({ optionPosition: 2});
      cy.findByRole('button', { name: /buscar/i }).click();
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
    });
  });
});
