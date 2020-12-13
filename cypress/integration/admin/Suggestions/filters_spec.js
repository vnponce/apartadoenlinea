import moment from 'moment';
import {
  // createSolvedSuggestion,
  // createSuggestion,
  // createUnsolvedSuggestion,
  goToSuggestions,
  tableRowSelector,
} from '../../common';

describe('Dashboard', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });

  it('should show pagination if parameter get=pagination exist', () => {
    cy.create('App\\Suggestion', 16);
    goToSuggestions();

    cy.get('.pagination');
  });
  it('should show go to page 2', () => {
    cy.create('App\\Suggestion', 16);
    goToSuggestions();

    cy.get('.page-link:nth(2)').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/admin/suggestions?page=2`);
  });
  it.only('should filter by name ', () => {
    cy.create('App\\Suggestion', {
      name: 'Abel',
    }).then((order) => {
      cy.create('App\\Suggestion', 10);
      cy.log('order =>', order);
      const { id, name } = order;
      goToSuggestions();

      console.log(tableRowSelector);
      cy.get(tableRowSelector).should('have.length', 11);
      // cy.get('#main-contents table tbody tr').should('have.length', 11);
      cy.findByLabelText(/nombre/i).type(`${name}{enter}`);
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel');
      cy.findByLabelText(/nombre/i).should('have.value', `${name}`);
    });
  });
  it.skip('should filter by email', () => {
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
  it.skip('should filter by status', () => {
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
  it.skip('should filter by who resolved suggestion', () => {
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
  it.skip('should filter by mixed, name, status and who resolved', () => {
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
  it.skip('should filter by mixed, email, status and who resolved', () => {
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
});
