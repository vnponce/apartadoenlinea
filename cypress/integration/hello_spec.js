it('authenticated users can see the dashboard', () => {
    cy.login({ name: 'John Doe' });

    cy.visit('/admin').contains('Welcome Back, John Doe!');
});
