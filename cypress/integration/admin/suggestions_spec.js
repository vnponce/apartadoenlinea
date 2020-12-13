import { tableRowSelector } from '../common';

describe('Suggestions page from Panel', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });
  const goToSuggestions = ({ dynamicLogin = 'login', specialLoginData = {} } = {}) => {

    cy.['login'](specialLoginData);
    cy.visit('/admin');
    cy.findByRole('link', { name: /sugerencia/i }).click();
  };

  const createSuggestion = ({ name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Que buen pan' } = {}) => {
    return cy.create('App\\Suggestion', {
      name,
      email,
      suggestion,
    });
  };
  const createSolvedSuggestion = ({
    name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Que buen pan', solved = true, dynamicLogin = 'login', specialLoginData = {},
  } = {}) => {
    cy.create('App\\Suggestion', {
      name,
      email,
      suggestion,
    }).then((res) => {
      cy.log(res);
      goToSuggestions({ dynamicLogin, specialLoginData });
      cy.addCommentToSuggestion({
        suggestion: res.id,
        comment: 'Hola comentario',
        solved,
      }).then((res) => {
        cy.log('res =>', res);
        cy.visit('/admin');
        cy.visit('/admin/suggestions');
      });
      // cy.php(`
      //       $suggestion = App\\Suggestion::latest()->first();
      //       $suggestion->suggestion = 'feo';
      //       $comment = new Laravelista\\Comments\\Comment;
      //       // $comment->commenter()->associate(auth()->user());
      //       $comment->commenter()->associate(App\\Auth::user());
      //       $comment->commentable()->associate($suggestion);
      //       $comment->comment = 'Gracias por el comentario';
      //       $comment->approved = true;
      //       $comment->save();
      //
      //       $suggestion->name = 'Antonio';
      //       $suggestion->save();
      //   `).then((res) => {
      //   cy.log(res);
      //   goToSuggestions();
      // });
    });
  };
  const createUnsolvedSuggestion = ({ name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Que buen pan' } = {}) => {
    createSolvedSuggestion({
      name, email, suggestion, solved: false,
    });
  };
  it('should navigate if click suggestion section', () => {
    goToSuggestions();
    cy.findByText('Sugerencias');
  });

  it('should displays suggestions', () => {
    createSuggestion();
    goToSuggestions();

    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce');
    // cy.get(`${tableRowSelector}[id=1]`).contains('abel@ponce.com');
    cy.get(`${tableRowSelector}[id=1] td:nth(1)`).contains('Que buen pan');
    cy.get(`${tableRowSelector}[id=1] td:nth(2)`).contains('created');
  });

  it('should show suggestion details', () => {
    createSuggestion();
    goToSuggestions();
    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce').click();
    cy.get('#dash-content').within(() => {
      cy.findByText('Abel Ponce');
      cy.contains('abel@ponce.com');
      cy.contains('Que buen pan');
      cy.findByLabelText(/comentario/i);
      cy.findByRole('button', { name: /solucionado/i });
      cy.findByRole('button', { name: /cancelar/i });
    });
  });
  it('should show solved suggestion details', () => {
    createSolvedSuggestion();
    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce').click();
    cy.get('#dash-content').within(() => {
      cy.findByText('Abel Ponce');
      cy.contains('abel@ponce.com');
      cy.contains('Que buen pan');
      cy.findByLabelText(/comentario/i).should('not.exist');
      // aqui revisar lo de comentario de seguimiento, el comentario, quien soluciono de usuario y la hora.
      cy.findByRole('button', { name: /solucionado/i }).should('not.exist');
      cy.findByRole('button', { name: /cancelar/i }).should('not.exist');
      cy.contains('Hola comentario');
      cy.contains('agregó comentario');
    });
  });
  it.skip('should show unsolved suggestion details', () => {
      // this test only is when user could add comment but no is status changed to solve when save this comment
    createUnsolvedSuggestion();
    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce').click();
    cy.get('#dash-content').within(() => {
      cy.findByText('Abel Ponce');
      cy.contains('abel@ponce.com');
      cy.contains('Que buen pan');
      cy.findByLabelText(/comentario/i).should('not.exist');
      // aqui revisar lo de comentario de seguimiento, el comentario, quien soluciono de usuario y la hora.
      cy.findByRole('button', { name: /agregar/i }).should('not.exist');
      cy.findByRole('button', { name: /cancelar/i }).should('not.exist');
      cy.contains('Hola comentario');
      cy.contains('agregó comentario');
      cy.findByRole('button', { name: /solucionar/i }).should('exist');
    });
  });

  it('should add user comment and change status to solved', () => {
    createSuggestion();
    goToSuggestions({ dynamicLogin: true, specialLoginData:{ name: 'Antonio Solver'}})
    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce').click();

    cy.findByLabelText(/comentario/i).type('Nuevo comentario que ha resuelto la sugerencia');
    cy.findByRole('button', { name: /solucionado/i }).click();

    cy.findByLabelText(/comentario/i).should('not.exist');
      cy.get('#dash-content').within(() => {
          cy.contains(/Antonio Solver- agregó comentario/i);
          cy.findByText(/Nuevo comentario que ha resuelto la sugerencia/i);
          cy.contains(/sugerencia solucionada por: Antonio Solver/i);
      });
  });
  // agregar boton de solucionar
  it.skip('should change to solved when user clicks on Solucionar button and save whos was click on the button', () => {
      // no se usa porque esta es cuando el status se puede cambiar despues de agregar comentario
    // createUnsolvedSuggestion();
      cy.create('App\\User', {
          name: 'Antonio Not Click Solver',
      }).then(user => {
          createSuggestion().then(res => {
              cy.addCommentToSuggestion({
                  suggestion: res.id,
                  comment: 'Hola comentario',
                  solved: false,
                  user: user.id,
              }).then((res) => {
                  cy.log('res =>', res);
              });

          })
      })
      goToSuggestions({ dynamicLogin: true, specialLoginData:{ name: 'Abel Solver'}})
    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce').click();
    cy.findByRole('button', { name: /solucionar/i }).click();
    cy.get('#dash-content').within(() => {
      cy.findByText(/sugerencia solucionada por: Abel Solver/i);
      // como saber que es el usuario que la soluciono?
    });
  });

  // al darle cancelar que se quite el seleccionado y que borre lo escrito
});
