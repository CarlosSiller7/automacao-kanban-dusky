import Chance from "chance";
const chance = new Chance();

describe("Teste de exclusão de lista no kanban", () => {
  it("Deve excluir uma lista do kanban", () => {
    cy.acessarSite();

    cy.get("div.trash svg").first().click();
  });
});
