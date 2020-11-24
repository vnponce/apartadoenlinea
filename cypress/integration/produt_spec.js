describe('product page', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });
  it('should show custom message error in 25 chars', () => {
    const maxChar = '1234567890123456789012345';
    cy.create('App\\Product');
    cy.login();
    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByLabelText(/deseas personalizar tu pastel\? de la forma lo env.es ser. escrito/i).type(maxChar);
    cy.get('.error').should('contain', 'Máximo 25 caracteres');
  });
  it('should show comment error in 120 chars', () => {
    const maxChar = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901';
    cy.create('App\\Category', { name: 'Bocadillos' });
    cy.create('App\\Product', { name: 'Great Bocadillo', category_id: 1 });
    cy.login();
    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByLabelText(/Si no deseas/i).type(maxChar);
    cy.get('.error').should('contain', 'Máximo 120 caracteres');
  });
});
