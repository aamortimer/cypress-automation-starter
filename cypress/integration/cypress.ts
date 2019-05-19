describe("Homepage", () => {
  before(() => {
    cy.visit("/");
  });

  it("Should have a logo", () => {
    cy.get(".header__HeaderContent-xi2ch0-1 hTjeot img");
  });
});
