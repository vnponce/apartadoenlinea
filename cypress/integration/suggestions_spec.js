describe('Suggestions page', () => {
  const createSuggestion = ({ name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Esta panaderia me gusta mucho' }) => {
    cy.visit('/sugerencias');
    cy.findByLabelText(/nombre completo/i).type(name);
    cy.findByLabelText(/correo/i).type(email);
    cy.findByLabelText(/sugerencia/i).type(suggestion);
    cy.findByRole('button', { name: /enviar/i }).click();
  };
  beforeEach(() => {
    cy.refreshDatabase();
  });
  it('should send suggestion', () => {
    cy.visit('/sugerencias');
    cy.findByLabelText(/nombre completo/i).type('Abel Ponce');
    cy.findByLabelText(/correo/i).type('abel@ponce.com');
    cy.findByLabelText(/sugerencia/i).type('Esta panaderia me gusta mucho');
    cy.findByRole('button', { name: /enviar/i }).click();

    cy.get('.swal2-modal').contains('Su comentario ha sido registrado con éxito');
    cy.findByLabelText(/nombre completo/i).should('be.disabled');
    cy.findByLabelText(/correo/i).should('be.disabled');
    cy.findByLabelText(/sugerencia/i).should('be.disabled');
    cy.findByRole('button', { name: /enviar/i }).should('be.disabled');

    cy.php(`
        App\\Suggestion::first()
    `).then(({
      name, email, suggestion, status,
    }) => {
      expect(name).to.have.string('Abel Ponce');
      expect(email).to.have.string('abel@ponce.com');
      expect(suggestion).to.have.string('Esta panaderia me gusta mucho');
      expect(status).to.have.string('created');
      // expect(store_id).to.be.eq(1); // validar este dato trayendo las store
    });
  });
  it('should show error message when name is not send', () => {
    createSuggestion({ name: ' ' });
    cy.get('.error-name').should('exist');
  });
  it('should show error message when email is not send', () => {
    createSuggestion({ email: ' ' });
    cy.get('.error-email').should('exist');
  });
  it('should show error message when email is not valid', () => {
    createSuggestion({ email: 'no-valid-email' });
    cy.get('.error-email').should('exist');
  });
  it('should show error message when suggestion is not send', () => {
    createSuggestion({ suggestion: ' ' });
    cy.get('.error-suggestion').should('exist');
  });
});
