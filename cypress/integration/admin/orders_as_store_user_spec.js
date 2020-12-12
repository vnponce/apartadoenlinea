import moment from 'moment';

describe('Dashboard', () => {
  beforeEach(() => {
    cy.refreshDatabase();
    cy.create('App\\User', {
      role: 'manager',
    });
  });

  // @todo: refactor con common.js
  const tableRowSelector = '#main-contents table tbody tr';

  it('should see listed orders', () => {
    cy.create('App\\Store', {
      name: 'First Store',
    }).then((store) => {
      cy.create('App\\Order', 2);
      cy.create('App\\Order', {
        name: 'Abel',
        store_id: store.id,
      }).then((order) => {
        cy.log('order =>', order);
        const { id } = order;
        cy.bindUserStore({
          userId: 1,
          storeId: store.id,
        });

        cy.specialLogin({ role: 'manager' });

        cy.visit('/admin');
        cy.get(tableRowSelector).should('have.length', 1);

        cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
        cy.get(`${tableRowSelector}[id=${id}]`).contains('First Store');
      });
    });
  });
  it('should filter by uuid', () => {
    cy.create('App\\Store', {
      name: 'First Store',
    }).then((store) => {
      cy.create('App\\Order', 3, {
        store_id: store.id,
      }).then((orders) => {
        cy.log('orders =>', orders);
        // cy.create('App\\Order', 10);
        // cy.log('order =>', order);
        const { name, id, uuid } = orders[0];
        cy.bindUserStore({
          userId: 1,
          storeId: store.id,
        });

        cy.specialLogin({ role: 'manager' });

        cy.visit('/admin');
        cy.get(tableRowSelector).should('have.length', 3);
        cy.findByLabelText(/id/i).type(`${uuid}{enter}`);
        cy.get(`${tableRowSelector}[id=${id}]`).contains(name);
        cy.get(tableRowSelector).should('have.length', 1);
      });
    });
    //
  });
  it('should filter by date', () => {
    // cy.log('date =>', moment().format('Y-MM-DD H:mm:ss'));
    //
    cy.create('App\\Store', {
      name: 'First Store',
    }).then((store) => {
      cy.create('App\\Order', 3, {
        store_id: store.id,
        date: moment().add(1, 'd').format('Y-MM-DD H:mm:ss'),
      });
      cy.create('App\\Order', {
        name: 'Abel',
        store_id: store.id,
        date: moment().format('Y-MM-DD H:mm:ss'),
      }).then((order) => {
        cy.log('orders =>', order);
        const { id } = order;
        cy.bindUserStore({
          userId: 1,
          storeId: store.id,
        });

        cy.specialLogin({ role: 'manager' });
        cy.visit('/admin');
        cy.get(tableRowSelector).should('have.length', 4);
        cy.selectDate();
        cy.findByRole('button', { name: /buscar/i }).click();
        cy.get(tableRowSelector).should('have.length', 1);
        cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
      });
    });
  });
  it('should filter by status', () => {
    cy.create('App\\Store', {
      name: 'First Store',
    }).then((store) => {
      cy.create('App\\Order', 3, {
        store_id: store.id,
        status: 'opened',
      });
      cy.create('App\\Order', {
        name: 'Abel',
        store_id: store.id,
        status: 'delivered',
      }).then((order) => {
        cy.log('orders =>', order);
        const { id } = order;
        cy.bindUserStore({
          userId: 1,
          storeId: store.id,
        });

        cy.specialLogin({ role: 'manager' });
        cy.visit('/admin');
        cy.get(tableRowSelector).should('have.length', 3);
        cy.selectStatus({ optionPosition: 2, selectorNumber: 2 });
        cy.findByRole('button', { name: /buscar/i }).click();
        cy.get(tableRowSelector).should('have.length', 1);
        cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
      });
    });
  });
  it('should filter by part of uuid', () => {
    cy.create('App\\Store', {
      name: 'First Store',
    }).then((store) => {
      cy.create('App\\Order', 3, {
        store_id: store.id,
      });
      cy.create('App\\Order', {
        name: 'Abel',
        store_id: store.id,
      }).then((order) => {
        const { id, uuid } = order;
        cy.bindUserStore({
          userId: 1,
          storeId: store.id,
        });

        const uuidPart = uuid.substr(1, 6);

        cy.specialLogin({ role: 'manager' });
        cy.visit('/admin');
        cy.get(tableRowSelector).should('have.length', 4);
        cy.findByLabelText(/id/i).type(`${uuidPart}{enter}`);
        cy.findByRole('button', { name: /buscar/i }).click();
        cy.get(tableRowSelector).should('have.length', 1);
        cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
      });
    });
  });
  it('should filter by mixed, date and status', () => {
    cy.create('App\\Store', {
      name: 'First Store',
    }).then((store) => {
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
        status: 'delivered',
      }).then((order) => {
        const { id } = order;
        cy.bindUserStore({
          userId: 1,
          storeId: store.id,
        });

        cy.specialLogin({ role: 'manager' });
        cy.visit('/admin');
        cy.get(tableRowSelector).should('have.length', 1);
        cy.selectDate();
        cy.selectStatus({ optionPosition: 2, selectorNumber: 2 });
        cy.findByRole('button', { name: /buscar/i }).click();
        cy.get(tableRowSelector).should('have.length', 1);
        cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
      });
    });
  });
});
