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
      cy.findByLabelText(/id/i).should('have.value', `${uuid}`);
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
        cy.get('.stores-selector__value-container').should('contain', 'First Store');
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
      const { id } = order;
      cy.login();

      cy.visit('/admin');
      cy.get(tableRowSelector).should('have.length', 11);
      cy.selectDate();
      cy.findByRole('button', { name: /buscar/i }).click();
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
      moment.locale('es');
      cy.get('#date').should('have.value', moment().format('D MMMM YYYY'));
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
      cy.selectStatus({ optionPosition: 2 });
      cy.findByRole('button', { name: /buscar/i }).click();
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
      cy.get('.status-selector__value-container').contains('Entregados');
    });
  });
  it('should filter by part of uuid', () => {
    cy.create('App\\Order', {
      name: 'Abel',
    }).then((order) => {
      // cy.log('date =>', moment().add(1, 'd').format('Y-MM-DD H:mm:ss'));
      cy.create('App\\Order', 10);
      const { id, uuid } = order;
      cy.login();

      const uuidPart = uuid.substr(1, 6);

      cy.visit('/admin');
      cy.get(tableRowSelector).should('have.length', 11);
      cy.findByLabelText(/id/i).type(`${uuidPart}{enter}`);
      cy.findByRole('button', { name: /buscar/i }).click();
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
    });
  });
  it('should filter by mixed, store, date and status', () => {
    cy.create('App\\Store', {
      name: 'First Store',
    }).then((store) => {
      cy.create('App\\Order', {
        name: 'No store id',
        date: moment().format('Y-MM-DD H:mm:ss'),
        status: 'delivered',
      });
      cy.create('App\\Order', {
        name: 'No date',
        store_id: store.id,
        date: moment().add(1, 'd').format('Y-MM-DD H:mm:ss'),
        status: 'delivered',
      });
      cy.create('App\\Order', {
        name: 'No status',
        store_id: store.id,
        date: moment().format('Y-MM-DD H:mm:ss'),
        status: 'placed',
      });
      cy.create('App\\Order', {
        name: 'Abel',
        store_id: store.id,
        date: moment().format('Y-MM-DD H:mm:ss'),
        status: 'delivered',
      }).then((order) => {
        cy.log('order =>', order);
        const { id } = order;
        // const storeId = order.store_id;
        cy.login();

        cy.visit('/admin');
        // cy.findByLabelText(/sucursal/i).type(`${uuid}{enter}`);
        cy.get(tableRowSelector).should('have.length', 1);

        cy.selectStore();
        cy.selectDate();
        cy.selectStatus({ optionPosition: 2 });
        cy.findByRole('button', { name: /buscar/i }).click();
        cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
        cy.get(`${tableRowSelector}[id=${id}]`).contains('First Store');
        cy.get(tableRowSelector).should('have.length', 1);
      });
    });
  });
  it('should filter by historic date value and show only from today to older orders', () => {
    cy.create('App\\Order', {
      name: 'Today expected',
      date: moment().format('Y-MM-DD H:mm:ss'),
    });
    cy.create('App\\Order', {
      name: 'Tomorrow not expected',
      date: moment().add(1, 'd').format('Y-MM-DD H:mm:ss'),
    });
    cy.create('App\\Order', {
      name: 'Yesterday expected',
      date: moment().subtract(1, 'd').format('Y-MM-DD H:mm:ss'),
    });
    cy.create('App\\Order', {
      name: 'Yesterday delivered expected',
      date: moment().subtract(1, 'd').format('Y-MM-DD H:mm:ss'),
      status: 'delivered',
    });
    cy.create('App\\Order', {
      name: 'Before yesterday placed expected',
      date: moment().subtract(2, 'd').format('Y-MM-DD H:mm:ss'),
      status: 'placed',
    });

    cy.login();

    cy.visit('/admin');
    cy.get(tableRowSelector).should('have.length', 2);
    cy.findByRole('link', { name: /anteriores/i }).click();
    // cy.findByText(/pedidos anteriores/i);

    cy.get(tableRowSelector).should('have.length', 4);
    // por alguna razon de renderizado esta validaciond ebe ir despues de ver algo en el contenido.
    cy.get('.status-selector__value-container').contains('Todos');
    cy.get('#date').should('have.value', '');
    cy.php(`
        App\\Order::all()
    `).then((orders) => {
      orders.filter((order) => order.name === 'Tomorrow not expected')
        .map((order) => {
          cy.get(`${tableRowSelector}[id=${order.id}]`).should('not.exist');
        });
      orders.filter((order) => order.name !== 'Tomorrow not expected')
        .map((order) => {
          cy.get(`${tableRowSelector}[id=${order.id}]`).contains(order.name);
        });
    });

    // Veryfie order
    cy.get(`${tableRowSelector}:first`).contains('Today expected');
    cy.get(`${tableRowSelector}:last`).contains('Before yesterday placed expected');
  });
  it('should show pagination if parameter get=pagination exist', () => {
    cy.create('App\\Order', 16);
    cy.login();

    cy.visit('/admin?get=paginate');
    cy.get('.pagination');
  });

  it('should show pagination if parameter get=pagination exist', () => {
    cy.create('App\\Order', 16);
    cy.login();

    cy.visit('/admin?get=paginate');
    cy.get('.page-link:nth(2)').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/admin?get=paginate&page=2`);
  });

  it('should filters work when is get=paginate', () => {
    cy.create('App\\Order', 16);
    cy.login();

    cy.visit('/admin?get=paginate');
    // cy.get('.page-link:nth(2)').click();
    cy.findByLabelText(/id/i).type('123{enter}');
    cy.url().should('contains', `${Cypress.config().baseUrl}/admin?get=paginate&id=123`);
  });

  it('should date=paginate must continue send when add a filter', () => {
    cy.create('App\\Order', 16);
    cy.create('App\\Order', {
      name: 'First name',
    }).then(({ uuid, id }) => {
      cy.login();

      cy.visit('/admin?date=historic');
      cy.findByLabelText(/id/i).type(`${uuid}{enter}`);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('First name');
    });
  });
});
