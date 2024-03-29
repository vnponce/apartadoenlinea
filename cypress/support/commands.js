// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';


/**
 * Special to find or create a new user and log them in.
 *
 * @param {Object} attributes
 *
 * @example cy.login();
 *          cy.login({ name: 'JohnDoe' });
 */
Cypress.Commands.add('specialLogin', (attributes = {}) => {
    return cy.csrfToken()
        .then(token => {
            return cy.request({
                method: 'POST',
                url: '/__cypress_abel__/login',
                body: { attributes, _token: token },
                log: false
            })
        })
        .then(({body}) => {
            Cypress.log({
                name: 'login',
                message: attributes,
                consoleProps: () => ({ user: body })
            });
        }).its('body', {log: false});
});

/**
 * Special to add comment to suggestion.
 *
 * @param {Object} attributes
 *
 * @example cy.login();
 *          cy.login({ name: 'JohnDoe' });
 */
Cypress.Commands.add('addCommentToSuggestion', (attributes = { suggestion, comment, } = {}) => {
    return cy.csrfToken()
        .then(token => {
            return cy.request({
                method: 'POST',
                url: '/__cypress_abel__/addCommentToSuggestion',
                body: { attributes, _token: token },
                log: false
            })
        })
        .then(({body}) => {
            Cypress.log({
                name: 'addCommentToSuggestion',
                message: attributes,
                // consoleProps: () => ({ user: body })
            });
        }).its('body', {log: false});
});

/**
 * Create an order with product.
 *
 * @param {Object} options
 *
 * @example cy.refreshDatabase();
 *          cy.refreshDatabase({ '--drop-views': true });
 */
Cypress.Commands.add('createOrder', (options = {}) => {
  const { orderId, productId, productPrice, quantity = 1, comment = '', customMessage = '' } = options;
  return cy.php(`
        DB::table('order_product')->insert(
        [
            'order_id' => ${orderId || 'factory(App\\Order::class)->create()->id'},
            'product_id' => ${productId || 'factory(App\\Product::class)->create()->id'},
            'price' => ${productPrice || 20000},
            'comment' => '${comment}',
            'quantity' => ${quantity},
            'custom_message' => '${customMessage}',
        ]
        );
    `);
  // Este no funciono, decia que el precio no tenia valor por defacto.
  // cy.php(`
  //     factory(App\\Order::class)->create()->each(function ($currentOrder) {
  //         $currentOrder->products()->save(factory(App\\Product::class)->make());
  //     });
  // `);
});


Cypress.Commands.add('createOrderWithProducts', (options = {}) => {
  const { products = [] } = options;
  let order;

  // crear order
  cy.create('App\\Order').then((orderCreated) => {
    console.log('orderCreated =>', orderCreated);
    cy.log('orderCreated =>', orderCreated);
    order = orderCreated;

    // agregar los productos a la orden
    // si existen products debe hacer el foreach
    if (products.length) {
      products.forEach((product) => {
        cy.create('App\\Product', {
          name: product.name,
          price: product.price,
        }).then((productCreated) => {
          cy.createOrder({
            orderId: order.id,
            productId: productCreated.id,
            productPrice: productCreated.price,
          });
        });
      });
    } else {
      // si no existe products property pues que agreue solo uno a esa orden.
      cy.createOrder({
        orderId,
      });
    }
  });
  // console.log('order =>', order);
  // cy.log('order =>', order);
  // // return order
  // return order;
});

/**
 * Create an user with store.
 *
 * @param {Object} options
 *
 * @example cy.refreshDatabase();
 *          cy.refreshDatabase({ '--drop-views': true });
 */
Cypress.Commands.add('bindUserStore', (options = {}) => {
    const { userId, storeId } = options;
    return cy.php(`
        DB::table('store_user')->insert(
        [
            'store_id' => ${storeId || 'factory(App\\Order::class)->create()->id'},
            'user_id' => ${userId || 'factory(App\\Product::class)->create()->id'},
        ]
        );
    `);
    // Este no funciono, decia que el precio no tenia valor por defacto.
    // cy.php(`
    //     factory(App\\Order::class)->create()->each(function ($currentOrder) {
    //         $currentOrder->products()->save(factory(App\\Product::class)->make());
    //     });
    // `);
});

// inputs
/* Store */
Cypress.Commands.add('selectStore', ({ optionPosition = 1 } = {}) => {
  // select store
  // las posiciones inician en 0 pero por si en el futuro quieres la 3 y se te va, pues ya que pongas 3 y se le resta una.
  const optionSelected = optionPosition - 1;
  cy.get('.stores-selector__value-container').click();
  cy.get(`#react-select-2-option-${optionSelected}`).click();
});

/* Date */
Cypress.Commands.add('selectDate', () => {
  // date
  cy.get('#date').click();
  cy.get('.CalendarDay__today').click();
});

/* Hour */
Cypress.Commands.add('selectHour', ({ optionPosition = 1 } = {}) => {
  // hour
  // las posiciones inician en 0 pero por si en el futuro quieres la 3 y se te va, pues ya que pongas 3 y se le resta una.
  const optionSelected = optionPosition - 1;
  cy.findByLabelText(/hora/i).click({ force: true });
  cy.get(`#react-select-3-option-${optionSelected}`).click();
});

/* Store */
Cypress.Commands.add('selectStatus', ({ optionPosition = 1, selectorNumber = 3 } = {}) => {
    // select status
    // las posiciones inician en 0 pero por si en el futuro quieres la 3 y se te va, pues ya que pongas 3 y se le resta una.
    const optionSelected = optionPosition - 1;
    cy.get('.status-selector__value-container').click();
    cy.get(`#react-select-${selectorNumber}-option-${optionSelected}`).click();
});


/* ACTION */
/* fill user data with employee */
Cypress.Commands.add('typeUserData', ({ name = 'Abel', lastname = 'Ponce', phone = '12345678', email = 'me@abelponce.com'} = {}) => {
  // datos de usuario
  cy.findByLabelText(/nombre/i).type(name);
  cy.findByLabelText(/apellido/i).type(lastname);
  cy.findByLabelText(/tel.fono/i).type(phone);
  cy.findByLabelText(/correo/i).type(email);
  cy.findByLabelText(/Qui.n levant. el pedido/i).type('Antonio');
});

/* go to add user data */
Cypress.Commands.add('goToUserData', () => {
    //
    cy.get('#charola').click();
    cy.findByRole('button', { name: /agregar datos/i }).click();
    cy.findByText(/pedidos/i);
});

/* typeUserData */
Cypress.Commands.add('setOrderData', () => {
    cy.selectStore();
    cy.selectDate();
    cy.selectHour();

    cy.typeUserData();
    cy.findByRole('button', { name: /proceder/i }).click();
});
