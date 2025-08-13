import Chance from "chance";
const chance = new Chance();

describe("Teste de exclusão de coluna no kanban", () => {
  it("Deve excluir uma coluna do kanban", () => {
    // Antes de visitar a página
    cy.viewport(1920, 1080); // Largura x Altura

    cy.acessarSite();

    cy.get("div.trash svg").first().click();
  });
});
