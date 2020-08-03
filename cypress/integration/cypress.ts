describe("Homepage", () => {
  before(() => {
    cy.visit("");
  });

  it("Should have a logo", () => {
    cy.get("a[aria-current='page']");
  });
});
