import Chance from "chance";
const chance = new Chance();

describe("Teste de adição de lista no banban", () => {
  it("Deve clicar em adicionar uma nova lista e seguir o fluxo", () => {
    cy.acessarSite();

    //Variáveis

    const jiraColumns = [
      "Backlog",
      "To Do",
      "In Progress",
      "In Review",
      "On Hold",
      "Blocked",
      "Done",
      "Testing",
      "Ready for QA",
      "QA in Progress",
      "Ready for Deployment",
      "Deployed",
      "Closed",
      "Cancelled",
      "Pending Approval",
      "Under Review",
      "Ready for Design",
      "Design in Progress",
      "Ready for Dev",
      "Dev in Progress",
      "Ready for Release",
      "Release in Progress",
      "Hotfix",
      "Bug Triage",
      "Code Review",
      "Documentation",
      "Planning",
      "Refinement",
      "Sprint Backlog",
      "Awaiting Feedback",
      "Feedback Received",
      "Ready for Merge",
      "Merging",
      "Ready for Testing",
      "Testing Blocked",
      "Security Review",
      "UX Review",
      "Performance Testing",
      "Integration Testing",
      "User Acceptance Testing",
      "Staging",
      "Ready for Staging",
      "Pre-Production",
      "Production",
      "Monitoring",
      "Rollback",
      "Archived",
      "Ready for Sign-off",
      "Sign-off in Progress",
      "Signed-off",
    ];

    const randomColumns = chance.pickone(jiraColumns);

    cy.contains("p", "Adicionar outra lista").click();
    cy.get(".sc-gsnTZi").type(randomColumns);
    cy.get(".btn").click();
  });
});
