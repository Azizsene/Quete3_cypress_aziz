describe('Glitch', () => {
        let  orderId;
    it("GET status", () => {
    cy.request({
      method: "GET",
      url: "https://simple-books-api.glitch.me/status",
    })
    .then((response) => {
    expect(response.status).eq(200);
    });
});
it("POST orders", ()=>{
    cy.request({
        method: "POST",
        url: "https://simple-books-api.glitch.me/orders", 
        body: {
            "bookId": 1,
            "customerName": "John"
        },
        headers:{
            Authorization:"Bearer 71a226aeb927d94b9e7095534a4c2f0d1d4e3fe93715e32a6b0b8d86391d35d2"
        }
    })
    .then((response) => {
    expect(response.status).eq(201);
    orderId = response.body.orderId;
    expect(response.body).to.have.property("orderId");
    });
    });
    it("GET orders", () => {
        cy.request({
        method: "GET" ,  
        url: `https://simple-books-api.glitch.me/orders`,        
        headers:{
            Authorization:"Bearer 71a226aeb927d94b9e7095534a4c2f0d1d4e3fe93715e32a6b0b8d86391d35d2"
        }
      })
    .then((response) => {
    expect(response.status).eq(200)       
        });
    });
    it("GET order by Id", () => {
        cy.request({
        url: `https://simple-books-api.glitch.me/orders/${orderId}`,        
        headers:{
            Authorization:"Bearer 71a226aeb927d94b9e7095534a4c2f0d1d4e3fe93715e32a6b0b8d86391d35d2"
            }
        }).then(
            (response) => {
        expect(response.status).eq(200);
        });
    });
    it("UPDATE ", () =>{
        cy.request({
            method: "PATCH",
            url: `https://simple-books-api.glitch.me/orders/${orderId}`,
            body: {          
                "customerName": "John"
            },
            headers:{
                Authorization:"Bearer 71a226aeb927d94b9e7095534a4c2f0d1d4e3fe93715e32a6b0b8d86391d35d2"
            }     
        }); 
        it("DELETE order", () =>{
            cy.request({
             method: "DELETE",
            url: `https://simple-books-api.glitch.me/orders/${orderId}`,
            headers
            });
        });
    });
});  
   