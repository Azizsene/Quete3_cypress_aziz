describe('APi Notes',()=>{
    let user = require('../fixtures/userData')
    const title=user.title;
    const description = user.description;
    const category= user.category;
    const id = user.id
    //Documentation
    it('GET documentation API notes', ()=>{
        cy.request(({
            url: 'https://practice.expandtesting.com/notes/api/api-docs/#/Notes/post_notes',
            method: 'GET'
        })).then((response) => {
            expect(response.status).eq(200);
        });
    });
    //Création de notes
    it( 'POST creation de notes', () => {
        cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        method: 'POST',
        body: {
            "title": 'Notes1',
             "description": "contenu de la note 1",
             "category": "Home",
            "id": "66379dab55382801414465c2"
            },
        headers:{
                "x-auth-token":"f38e1d9c2caf45a398b9b9e3c935a282a1283121084c4b07bc0e210d390d2e82"
            },
        }).then((response) => {
         expect(response.status).eq(200);
         });
         it( 'POST cration de notes', () => {
        cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        method: 'POST',
        body: {
            "title": 'Notes2',
            "description": "contenu de la note 2",
            "category": "Work",
            "id": "66379dab55382801414465c2"
        },
         headers:{
                "x-auth-token":"f38e1d9c2caf45a398b9b9e3c935a282a1283121084c4b07bc0e210d390d2e82"
        },
        }).then((response) => {
        expect(response.status).eq(200);
         expect(response.body).to.have.property("category")
        });

         it( 'GET recupération des notes', ()=>{
        cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
         method: 'GET',
        headers:{
                "x-auth-token":"f38e1d9c2caf45a398b9b9e3c935a282a1283121084c4b07bc0e210d390d2e82"
        },
        }).then((response) => {
         expect(response.status).eq(200);
         });
         it( 'Methode PUT', ()=>{
        cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        method: 'PUT',
        body: {
            "title": 'Notes2',
            "description": "contenu de la note 2",
            "category": "Work",
            "id": "66379dab55382801414465c2"
        },
        headers:{
                "x-auth-token":"f38e1d9c2caf45a398b9b9e3c935a282a1283121084c4b07bc0e210d390d2e82"
        },
        }).then((response) => {
         expect(response.status).eq(200);
         });
         });
    });
    });
});
});