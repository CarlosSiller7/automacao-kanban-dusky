import Chance from "chance";
const chance = new Chance();

describe("Teste de exclusão de tarefa", () => {
  it("Deve excluir de forma aleatória uma tarefa dentre as 3 colunas", () => {
    cy.acessarSite();

    // O botão de excluir card só aparecer caso o cursor esteja sobre ele. Então essa linha simula um hover
    cy.get(".trash").then(($trashButtons) => {
      // Aqui o cypress escolhe um elemento aleatório dentre as colunas para excluir
      const randomIndex = Math.floor(Math.random() * $trashButtons.length);

      cy.wait(2000);
      // Aqui ele clica nesse elemento escolhido
      cy.wrap($trashButtons[randomIndex]).click({ force: true });
    });
  });
});
