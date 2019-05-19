describe("Homepage", () => {
  before(() => {
    cy.visit("/");
  });

  it("Should have a logo", () => {
    cy.get("#lga");
  });
});
