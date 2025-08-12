import Chance from "chance";
const chance = new Chance();

describe("Teste de acesso", () => {
  it("Deve acessar o site", () => {
    cy.acessarSite();

    cy.get("div.trash svg").first().click();
  });
});
