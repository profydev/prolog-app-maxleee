describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("links are working", () => {
    // check that each link leads to the correct page
    cy.get("footer").contains("Docs").should("have.attr", "href", "#");

    cy.get("footer").contains("API").should("have.attr", "href", "#");

    cy.get("footer").contains("Help").should("have.attr", "href", "#");

    cy.get("footer").contains("Docs").should("have.attr", "href", "#");
  });

  it("displays the correct version number", () => {
    cy.get("footer")
      .contains("Version:")
      .should("contain.text", Cypress.env("version"));
  });

  //check for logo
  it("is displaying the correct logo when viewport is changed while navigation is collapsed", () => {
    //collapse navigation
    cy.get("footer")
      .get("img[src='/icons/logo-small.svg'")
      .should("be.visible");
  });
});
