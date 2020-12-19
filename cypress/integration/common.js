export const tableRowSelector = '#main-contents table tbody tr';

export const goToSuggestions = ({ dynamicLogin = 'login', specialLoginData = {} } = {}) => {

    cy.['login'](specialLoginData);
    cy.wait(1000);
    cy.visit('/admin');
    cy.findByRole('link', { name: /sugerencia/i }).click();
};

export const createSuggestion = ({ name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Que buen pan' } = {}) => {
    return cy.create('App\\Suggestion', {
        name,
        email,
        suggestion,
    });
};
export const createSolvedSuggestion = ({
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
export const createUnsolvedSuggestion = ({ name = 'Abel Ponce', email = 'abel@ponce.com', suggestion = 'Que buen pan' } = {}) => {
    createSolvedSuggestion({
        name, email, suggestion, solved: false,
    });
};
