describe('test right panel', () => {
  beforeEach(() => {
    cy.refreshDatabase();
    // const products = [
    //   {
    //     name: 'primer pan',
    //     price: 10,
    //   },
    //   {
    //     name: 'segundo pan',
    //     price: 20,
    //   },
    // ];
    //
    // cy.createOrderWithProducts({
    //   products,
    // });
  });
  it('should show panel when user add product-bread to cart', () => {
    const product = cy.create('App\\Product', {
      name: 'nice product',
      price: 13,
    });
    cy.login();

    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByRole('button', { name: /poner en la charola/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('.product-side-panel .panel').should('not.be.visible');
    cy.get('#charola').click();
    cy.wait(300);
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('.product-side-panel .panel').should('be.visible');
    cy.findAllByTestId('list-item-1').within(() => {
      // probar que sean los productos en lisatados.
      cy.get('.name').contains('nice product');
      cy.get('.quantity').contains('1');
      cy.get('.price').contains('$13.00');
    });
  });
  it('should not show allowed button and total if is empty and show empty charola', () => {
    cy.login();

    cy.visit('/');
    cy.get('#charola').click();
    cy.get('.product-side-panel .panel').within(() => {
      cy.findByText('No hay pan en la charola');
      cy.findByRole('button', { name: /proceder/i }).should('not.exist');
    });
  });
  it('should show customize message', () => {
    cy.create('App\\Product');
    cy.login();
    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByLabelText(/deseas personalizar tu pastel\? de la forma lo env.es ser. escrito/i).type('Gracias');
    cy.findByRole('button', { name: /poner en la charola/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('#charola').click();

    cy.get('#charola').click();
    cy.get('.product-side-panel .panel').within(() => {
      cy.findByText('Gracias');
    });
  });
  it('should edit custom message', () => {
    cy.create('App\\Product');
    cy.login();
    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByLabelText(/deseas personalizar tu pastel\? de la forma lo env.es ser. escrito/i).type('Gracias');
    cy.findByLabelText(/cantidad/i).type('{selectall}{backspace}3');
    cy.findByRole('button', { name: /poner en la charola/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('#charola').click();

    cy.get('#charola').click();
    cy.get('.product-side-panel .panel').within(() => {
      cy.findByText('Gracias').click();
      cy.get('input[name=custom-message]')
        .should('have.value', 'Gracias')
        .type('{selectall}{backspace}Dummy text')
        .blur();
    });

    // Gloudemans\Shoppingcart\Facades\Cart
    cy.php(`
        Gloudemans\\Shoppingcart\\Facades\\Cart::content()
    `).then((response) => {
      cy.log('response =>', Object.values(response)[0]);
      const { qty, options: { custom_message: customMessage } } = Object.values(response)[0];
      expect(customMessage).to.have.string('Dummy text');
      expect(qty * 1).to.be.eq(3);
    });
    cy.get('.product-side-panel .panel').within(() => {
      cy.findByText('Dummy text');
      cy.get('.quantity').contains('3');
    });
    //
  });
  it('should add quantity', () => {
    cy.create('App\\Product');
    cy.login();
    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByLabelText(/deseas personalizar tu pastel\? de la forma lo env.es ser. escrito/i).type('Gracias');
    // cy.findByLabelText(/cantidad/i).type('{selectall}{backspace}3');
    cy.findByRole('button', { name: /poner en la charola/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('#charola').click();

    cy.get('#charola').click();
    cy.get('.product-side-panel .panel').within(() => {
      cy.get('.add-item').click();
    });

    // Gloudemans\Shoppingcart\Facades\Cart
    cy.php(`
        Gloudemans\\Shoppingcart\\Facades\\Cart::content()
    `).then((response) => {
      cy.log('response =>', Object.values(response)[0]);
      const { qty, options: { custom_message: customMessage } } = Object.values(response)[0];
      expect(customMessage).to.have.string('Gracias');
      expect(qty * 1).to.be.eq(2);
    });
    cy.get('.product-side-panel .panel').within(() => {
      cy.get('.quantity').contains('2');
    });
    //
  });
  it('should remove quantity', () => {
    cy.create('App\\Product');
    cy.login();
    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByLabelText(/deseas personalizar tu pastel\? de la forma lo env.es ser. escrito/i).type('Gracias');
    cy.findByLabelText(/cantidad/i).type('{selectall}{backspace}3');
    cy.findByRole('button', { name: /poner en la charola/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('#charola').click();

    cy.get('#charola').click();
    cy.get('.product-side-panel .panel').within(() => {
      cy.get('.remove-item').click();
    });

    // Gloudemans\Shoppingcart\Facades\Cart
    cy.php(`
        Gloudemans\\Shoppingcart\\Facades\\Cart::content()
    `).then((response) => {
      cy.log('response =>', Object.values(response)[0]);
      const { qty, options: { custom_message: customMessage } } = Object.values(response)[0];
      expect(customMessage).to.have.string('Gracias');
      expect(qty * 1).to.be.eq(2);
    });
    cy.get('.product-side-panel .panel').within(() => {
      cy.get('.quantity').contains('2');
    });
    //
  });
  it('should keep comment when user edit custom message', () => {
    cy.create('App\\Category', { name: 'Bocadillos' });
    cy.create('App\\Product', { name: 'Great Bocadillo', category_id: 1 });
    cy.login();
    cy.visit('/');
    cy.get('.bread-card').click();
    cy.findByLabelText(/Si no deseas/i).type('sin nada');
    cy.findByLabelText(/deseas personalizar tu pastel\? de la forma lo env.es ser. escrito/i).type('Gracias');
    cy.findByLabelText(/cantidad/i).type('{selectall}{backspace}3');
    cy.findByRole('button', { name: /poner en la charola/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('#charola').click();

    cy.get('#charola').click();
    cy.get('.product-side-panel .panel').within(() => {
      cy.findByText('Gracias').click();
      cy.get('input[name=custom-message]')
        .should('have.value', 'Gracias')
        .type('{selectall}{backspace}Dummy text')
        .blur();
    });

    // Gloudemans\Shoppingcart\Facades\Cart
    cy.php(`
        Gloudemans\\Shoppingcart\\Facades\\Cart::content()
    `).then((response) => {
      cy.log('response =>', Object.values(response)[0]);
      const { qty, options: { custom_message: customMessage, comment } } = Object.values(response)[0];
      expect(customMessage).to.have.string('Dummy text');
      expect(comment).to.have.string('sin nada');
      expect(qty * 1).to.be.eq(3);
    });
    cy.get('.product-side-panel .panel').within(() => {
      cy.get('.quantity').contains('3');
    });
    //
  });
});
