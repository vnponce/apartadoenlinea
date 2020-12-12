describe('Suggestions page from Panel', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });
  it.only('should navigate if click suggestion section', () => {
    cy.login();
    cy.visit('/admin');
    cy.findByRole('link', { name: /sugerencia/i }).click();
    cy.findByText('Sugerencias');
  });
});
