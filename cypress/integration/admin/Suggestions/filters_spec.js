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

  it('should filter by name ', () => {
    cy.create('App\\Suggestion', {
      name: 'Abel',
    }).then((order) => {
      cy.create('App\\Suggestion', 10);
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

  it('should filter by email', () => {
    cy.create('App\\Suggestion', {
      name: 'Abel Ponce',
      email: 'abel@ponce.com',
    }).then((suggestion) => {
      cy.create('App\\Suggestion', 10);
      const { id, email } = suggestion;
      goToSuggestions();

      console.log(tableRowSelector);
      cy.get(tableRowSelector).should('have.length', 11);
      // cy.get('#main-contents table tbody tr').should('have.length', 11);
      cy.findByLabelText(/correo/i).type(`${email}{enter}`);
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel Ponce');
      cy.findByLabelText(/nombre/i).should('have.value', `${email}`);
    });
  });

  it('should filter by status', () => {
    cy.create('App\\Suggestion', {
      name: 'Abel Ponce',
      email: 'abel@ponce.com',
      status: 'solved',
    }).then((suggestion) => {
      cy.create('App\\Suggestion', 10);
      const { id } = suggestion;
      goToSuggestions();

      cy.get(tableRowSelector).should('have.length', 11);
      // cy.findByLabelText(/correo/i).type(`${email}{enter}`);
      cy.selectStatus({ optionPosition: 3, selectorNumber: 5 });
      cy.findByRole('button', { name: /buscar/i }).click();
      cy.get(tableRowSelector).should('have.length', 1);
      cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel Ponce');
      cy.get('.status-selector__value-container').contains('Solucionado');
    });
  });

  it('should filter by who resolved suggestion', () => {
    cy.create('App\\Suggestion', {
      name: 'Abel Ponce',
      email: 'abel@ponce.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.create('App\\Suggestion', 10, {
        status: 'solved',
      });
      cy.create('App\\User', 4);
      cy.create('App\\User', {
        name: 'Antonio Solver',
        role: 'manager',
      }).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'Solucionado',
          solved: true,
          user: user.id,
          // }).then((res) => {
          //   cy.log('res =>', res);
          //   cy.visit('/admin');
          //   cy.visit('/admin/suggestions');
        });
        cy.addCommentToSuggestion({
          suggestion: 3,
          comment: 'Solucionado',
          solved: true,
          user: user.id,
          // }).then((res) => {
          //   cy.log('res =>', res);
          //   cy.visit('/admin');
          //   cy.visit('/admin/suggestions');
        });
      });
      goToSuggestions();

      cy.get(tableRowSelector).should('have.length', 11);
      // users selector
      cy.get('.users-selector__value-container').click();
      cy.get('#react-select-4-option-0').click();

      cy.findByRole('button', { name: /buscar/i }).click();
      cy.get(tableRowSelector).should('have.length', 2);
      // cy.get(`${tableRowSelector}[id=${id}]`).contains('Abel Ponce');
      cy.get('.users-selector__value-container').contains('Antonio Solver');
    });
  });
  it('should filter by mixed, name, status and who resolved', () => {
    // sugerencia con nombre - Abel, status - resuelto y resolvio - antonio solver
    cy.create('App\\Suggestion', {
      name: 'Abel Pregunton',
      email: 'abel@ponce.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.create('App\\User', {
        name: 'Antonio Solver',
        role: 'manager',
      }).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'Solucionado',
          solved: true,
          user: user.id,
        });
      });
    });

    // mismo nombre, mismo solver, diff status - no resuelto
    cy.create('App\\Suggestion', {
      name: 'Abel Pregunton',
      email: 'abel@ponce.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.php(`
        App\\User::where('name', 'Antonio Solver')->first();
      `).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'No Solucionado',
          solved: false,
          user: user.id,
        });
      });
    });
    // sugerencia solo nombre y status
    cy.create('App\\Suggestion', {
      name: 'Abel Pregunton',
      email: 'abel@ponce.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.create('App\\User', {
        name: 'Not Antonio Solver',
        role: 'manager',
      }).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'Solucionado',
          solved: true,
          user: user.id,
        });
      });
    });

    // sugerencia solo con status y resolvio
    cy.create('App\\Suggestion', {
      name: 'Otro usuario',
      email: 'otro@usuario.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.php(`
        App\\User::where('name', 'Antonio Solver')->first();
      `).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'Solucionado',
          solved: true,
          user: user.id,
        });
      });
    });

    goToSuggestions();
    cy.get(tableRowSelector).should('have.length', 4);

    // cy.findByLabelText(/nombre/i).type('Abel{enter}');
    cy.findByLabelText(/nombre/i).type('Abel');
    cy.selectStatus({ optionPosition: 3, selectorNumber: 5 });
    // users selector
    cy.get('.users-selector__value-container').click();
    cy.get('#react-select-4-option-0').click();

    cy.findByRole('button', { name: /buscar/i }).click();
    cy.get(tableRowSelector).should('have.length', 1);
    cy.get(`${tableRowSelector}:first`).contains('Abel Pregunton');
    cy.get(`${tableRowSelector}:first`).contains('solved');
  });
  it.only('should filter by mixed, email, status and who resolved', () => {
    // sugerencia con nombre - Abel, status - resuelto y resolvio - antonio solver
    cy.create('App\\Suggestion', {
      name: 'Abel Pregunton',
      email: 'abel@ponce.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.create('App\\User', {
        name: 'Antonio Solver',
        role: 'manager',
      }).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'Solucionado',
          solved: true,
          user: user.id,
        });
      });
    });

    // mismo nombre, mismo solver, diff status - no resuelto
    cy.create('App\\Suggestion', {
      name: 'Abel Pregunton',
      email: 'abel@ponce.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.php(`
        App\\User::where('name', 'Antonio Solver')->first();
      `).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'No Solucionado',
          solved: false,
          user: user.id,
        });
      });
    });
    // sugerencia solo nombre y status
    cy.create('App\\Suggestion', {
      name: 'Abel Pregunton',
      email: 'abel@ponce.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.create('App\\User', {
        name: 'Not Antonio Solver',
        role: 'manager',
      }).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'Solucionado',
          solved: true,
          user: user.id,
        });
      });
    });

    // sugerencia solo con status y resolvio
    cy.create('App\\Suggestion', {
      name: 'Otro usuario',
      email: 'otro@usuario.com',
    }).then((suggestion) => {
      const { id } = suggestion;
      cy.php(`
        App\\User::where('name', 'Antonio Solver')->first();
      `).then((user) => {
        cy.addCommentToSuggestion({
          suggestion: id,
          comment: 'Solucionado',
          solved: true,
          user: user.id,
        });
      });
    });

    goToSuggestions();
    cy.get(tableRowSelector).should('have.length', 4);

    // cy.findByLabelText(/nombre/i).type('Abel{enter}');
    cy.findByLabelText(/nombre/i).type('@ponce');
    cy.selectStatus({ optionPosition: 3, selectorNumber: 5 });
    // users selector
    cy.get('.users-selector__value-container').click();
    cy.get('#react-select-4-option-0').click();

    cy.findByRole('button', { name: /buscar/i }).click();
    cy.get(tableRowSelector).should('have.length', 1);
    cy.get(`${tableRowSelector}:first`).contains('Abel Pregunton');
    cy.get(`${tableRowSelector}:first`).contains('solved');
  });
});
