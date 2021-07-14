describe("Search engine", () => {
  it("finds a Star Wars film", () => {
    cy.visit("/");

    cy.get("[data-test=finder-input]").type("jedi");
    cy.get("[data-test=finder]").submit();
    cy.get("[data-test=films]").should("contain", "Return of the Jedi");
  });
});
