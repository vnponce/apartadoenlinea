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
 * Create an order with product.
 *
 * @param {Object} options
 *
 * @example cy.refreshDatabase();
 *          cy.refreshDatabase({ '--drop-views': true });
 */
Cypress.Commands.add('createOrder', (options = {}) => {
  const { orderId, productId, productPrice } = options;
  return cy.php(`
        DB::table('order_product')->insert(
        [
            'order_id' => ${orderId || 'factory(App\\Order::class)->create()->id'},
            'product_id' => ${productId || 'factory(App\\Product::class)->create()->id'},
            'price' => ${productPrice || 20000},
            'comment' => 'no glutten',
            'quantity' => 2,
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
