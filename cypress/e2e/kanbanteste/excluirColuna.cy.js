import Chance from "chance";
const chance = new Chance();

describe("Teste de exclusão de coluna no kanban", () => {
  it("Deve excluir uma coluna do kanban", () => {
    cy.viewport(1920, 1080);

    cy.acessarSite();

    cy.get("div.trash svg").first().click();
  });
});
