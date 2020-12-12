import { tableRowSelector } from '../common';

describe('Suggestions page from Panel', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });

  const createSuggestion = ({ name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Que buen pan' } = {}) => {
    cy.create('App\\Suggestion', {
      name,
      email,
      suggestion,
    });
  };
  const goToSuggestions = () => {
    cy.login();
    cy.visit('/admin');
    cy.findByRole('link', { name: /sugerencia/i }).click();
  };
  it('should navigate if click suggestion section', () => {
    goToSuggestions();
    cy.findByText('Sugerencias');
  });

  it('should displays suggestions', () => {
    createSuggestion();
    goToSuggestions();

    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce');
    // cy.get(`${tableRowSelector}[id=1]`).contains('abel@ponce.com');
    cy.get(`${tableRowSelector}[id=1] td:nth(1)`).contains('Que buen pan');
    cy.get(`${tableRowSelector}[id=1] td:nth(2)`).contains('created');
  });

  it.only('should show suggestion details', () => {
    createSuggestion();
    goToSuggestions();
    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce').click();
    cy.get('#dash-content').within(() => {
      cy.findByText('Abel Ponce');
      cy.contains('abel@ponce.com');
      cy.contains('Que buen pan');
      cy.findByLabelText(/comentario/i);
      cy.findByRole('button', { name: /agregar/i });
      cy.findByRole('button', { name: /cancelar/i });
      cy.findByRole('button', { name: /se ha solucionado/i });
      // cy.findByLabelText(/Estatus/i);
    });
  });
});
