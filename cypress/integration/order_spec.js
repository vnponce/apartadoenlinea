describe('Create orders', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });

  it('should create an order successfully', () => {
    const bread = {
      name: 'great bread',
      price: 2000,
    };
    const customer = {
      name: 'Abel',
      lastname: 'Ponce',
      phone: '2299001122',
      email: 'abel@ponce.com',
    };
    const {
      name, lastname, phone, email,
    } = customer;

    cy.create('App\\Product', bread);
    cy.create('App\\Store', {
      name: 'FirstStore',
      sunday: '7:00 a 21:00',
    });

    // cy.login({ name: 'John Doe' });
    cy.login();

    cy.visit('/').contains('great bread')
      .click().contains('great bread');

    cy.findByRole('button', { name: /poner en la charola/i }).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('#charola a').click();
    cy.findByText(/pedidos/i);

    // select store
    cy.get('.stores-selector__value-container').click();
    cy.get('#react-select-2-option-0').click();

    // date
    // cy.findByLabelText(/día/i).click();
    cy.get('#date').click();
    cy.get('.CalendarDay__today').click();

    // hour
    cy.findByLabelText(/hora/i).click({ force: true });
    cy.get('#react-select-3-option-0').click();

    // datos de usuario
    cy.findByLabelText(/nombre/i).type(name);
    cy.findByLabelText(/apellido/i).type(lastname);
    cy.findByLabelText(/tel.fono/i).type(phone);
    cy.findByLabelText(/correo/i).type(email);
    cy.findByLabelText(/Qui.n levant. el pedido/i).type('Antonio');

    // click button
    cy.findByRole('button', { name: /proceder/i }).click();

    // seguro?
    cy.findAllByText(/mi charola/i); // quesque' son muchos por eso debo usar findAllByText
    // arreglar como limitar esto a la tabla o celda especifica
    cy.findByText(bread.name);
    // cy.findByText(1); //qty
    cy.findByText(`$${bread.price}.00`);
    cy.findByLabelText(/contenido de tu compra es el correcto/i).click();
    cy.findByRole('button', { name: /crear pedido/i }).click();

    // compra realizada
    cy.findByText(/GRACIAS POR TU COMPRA/i);

    // validate data from db
    cy.php(`
        App\\Order::first()
    `).then(({
      name, lastname, phone, email, store_id, employeeName, total,
    }) => {
      expect(name).to.have.string(customer.name);
      expect(lastname).to.have.string(customer.lastname);
      expect(phone).to.have.string(customer.phone);
      expect(email).to.have.string(customer.email);
      expect(employeeName).to.have.string('Antonio');
      expect(total).to.be.eq(200000);
      expect(store_id).to.be.eq(1); // validar este dato trayendo las store
    });
  });
});
