describe('Suggestions page', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });
  it('should send suggestion', () => {
    cy.visit('/comentario');
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

  // probar que regresa y se ve el modal de all cool y que se ponen disable los inputs.
});
