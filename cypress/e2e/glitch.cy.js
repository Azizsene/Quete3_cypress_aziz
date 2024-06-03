
describe('glitch', () => {
    let token = null;
    let  orderId;
        before(()=>{
            cy.request({
                method: "POST",
                url: "https://simple-books-api.glitch.me/api-clients/",
                body: {
                    "clientName": "assplt",
                    "clientEmail": "assalllpaass@example.com"
                }
        }).then((response) => {
        expect(response.status).eq(201);
        token=response.body.accessToken;
        })
        });
        it("POST", () => {
            cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/orders",
            headers: {
                
              },
            body: {
                "bookId": 1,
                "customerName": "John"
              }
            }).then((response) => {
            expect(response.status).eq(201);
            orderId = response.body.orderId;
            expect(response.body).to.have.property("orderId");
            });
            it("GET status", () => {
             cy.request({
             method: "GET",
            url: `https://simple-books-api.glitch.me/status`,
            headers: {
                Authorization:`Bearer ${token}`
              },
                })
            .then((response) => {
             expect(response.status).eq(200);
                });   
            });
            it("GET orders", () => {
            cy.request({
             method: "GET",
            url: `https://simple-books-api.glitch.me/orders`,
            headers: {
                Authorization:`Bearer ${token}`
              },
                })
            .then((response) => {
            expect(response.status).eq(200);
            });   
        });

    });
});

          
    
    
    
    
    
    
    
    
    
    
    
    
    





