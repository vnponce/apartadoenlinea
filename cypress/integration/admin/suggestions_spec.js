import { tableRowSelector } from '../common';

describe('Suggestions page from Panel', () => {
  beforeEach(() => {
    cy.refreshDatabase();
  });
  const goToSuggestions = () => {
    cy.login();
    cy.visit('/admin');
    cy.findByRole('link', { name: /sugerencia/i }).click();
  };

  const createSuggestion = ({ name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Que buen pan' } = {}) => {
    cy.create('App\\Suggestion', {
      name,
      email,
      suggestion,
    });
  };
  const createSolvedSuggestion = ({ name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Que buen pan' } = {}) => {
    cy.create('App\\Suggestion', {
      name,
      email,
      suggestion,
    }).then(res => {
      cy.log(res);
      goToSuggestions();
      cy.addCommentToSuggestion({
        suggestion: res.id,
        comment: 'Hola comentario',
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
      cy.findByRole('button', { name: /agregar/i });
      cy.findByRole('button', { name: /cancelar/i });
      cy.findByRole('button', { name: /se ha solucionado/i });
      // cy.findByLabelText(/Estatus/i);
    });
  });
  it.only('should show solved suggestion details', () => {
    createSolvedSuggestion();
    cy.get(`${tableRowSelector}[id=1] td:first`).contains('Abel Ponce').click();
    cy.get('#dash-content').within(() => {
      cy.findByText('Abel Ponce');
      cy.contains('abel@ponce.com');
      cy.contains('Que buen pan');
      cy.findByLabelText(/comentario/i).should('not.exist');
      // aqui revisar lo de comentario de seguimiento, el comentario, quien soluciono de usuario y la hora.
      cy.findByRole('button', { name: /agregar/i }).should('not.exist');
      cy.findByRole('button', { name: /cancelar/i }).should('not.exist');
      cy.findByRole('button', { name: /se ha solucionado/i }).should('not.exist');
      // cy.findByLabelText(/Estatus/i);
      // cy.contains('Sugerencia solucionada por: ');
      cy.contains('Hola comentario');
      cy.contains('agregó comentario');
    });
  });
});
