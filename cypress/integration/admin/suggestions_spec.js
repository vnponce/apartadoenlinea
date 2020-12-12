import { tableRowSelector } from '../common';

describe('Suggestions page from Panel', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });
  it('should navigate if click suggestion section', () => {
    cy.login();
    cy.visit('/admin');
    cy.findByRole('link', { name: /sugerencia/i }).click();
    cy.findByText('Sugerencias');
  });

  it('should displays suggestions', () => {
    cy.create('App\\Suggestion', {
      name: 'Abel Ponce',
      email: 'abel@ponce.com',
      suggestion: 'Que buen pan',
    });
    cy.login();
    cy.visit('/admin');
    cy.findByRole('link', { name: /sugerencia/i }).click();

    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce');
    // cy.get(`${tableRowSelector}[id=1]`).contains('abel@ponce.com');
    cy.get(`${tableRowSelector}[id=1] td:nth(1)`).contains('Que buen pan');
    cy.get(`${tableRowSelector}[id=1] td:nth(2)`).contains('created');
  });
});
