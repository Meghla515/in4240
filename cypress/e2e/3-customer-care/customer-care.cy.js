describe("customer care", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/");
  });

  it("can use customer care", () => {
    cy.get("#headerPanel > ul.button > li.contact > a").click();

    cy.contains("Customer Care");

    cy.get("#name").type("Jane Doe");

    cy.get("#email").type("jane.doe@gmail.com");

    cy.get("#phone").type("+4700000000");

    cy.get("#message").type("I need your help.");

    cy.contains("Send to Customer Care").click();

    cy.contains("Thank you Jane Doe");
  });
});
