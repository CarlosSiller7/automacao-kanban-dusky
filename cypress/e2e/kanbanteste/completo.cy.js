import "cypress-drag-drop";

import Chance from "chance";
const chance = new Chance();

describe("Teste completo do fluxo do kanban", () => {
  it("Deve fazer o texte completo do fluxo do kanban", () => {
    // Antes de visitar a página
    cy.viewport(1920, 1080); // Largura x Altura

    cy.acessarSite();

    //Cria uma coluna nova
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

    // Cria um card na coluna criada.

    // Variáveis
    const taskPrefixes = [
      "Desenvolva",
      "Crie",
      "Corrija",
      "Implemente",
      "Ajuste",
      "Otimize",
      "Refatore",
      "Atualize",
      "Remova",
      "Melhore",
      "Configure",
      "Teste",
      "Documente",
      "Automatize",
      "Integre",
      "Separe",
      "Reorganize",
      "Reescreva",
      "Verifique",
      "Aplique",
      "Repare",
      "Simplifique",
      "Desabilite",
      "Habilite",
      "Revise",
      "Conserte",
      "Complete",
      "Padronize",
      "Renomeie",
      "Sincronize",
      "Depure",
      "Proteja",
      "Investigue",
      "Organize",
      "Analise",
      "Reduza",
      "Expanda",
      "Adicione",
      "Mapeie",
      "Acompanhe",
      "Remodele",
      "Personalize",
      "Valide",
      "Carregue",
      "Publique",
      "Implemente teste de",
      "Facilite",
      "Harmonize",
      "Planeje",
      "Isolamento de",
    ];

    const taskSequences = [
      "front-end",
      "back-end",
      "funcionalidade de login",
      "funcionalidade de cadastro",
      "fluxo de pagamento",
      "fluxo de checkout",
      "carregamento da página inicial",
      "página de produtos",
      "componente de busca",
      "filtro de produtos",
      "integração com API externa",
      "sistema de notificações",
      "envio de e-mails",
      "layout responsivo",
      "formulário de contato",
      "painel administrativo",
      "módulo de relatórios",
      "geração de PDFs",
      "banco de dados",
      "API interna",
      "autenticação de usuários",
      "controle de permissões",
      "tratamento de erros",
      "performance do sistema",
      "segurança da aplicação",
      "upload de arquivos",
      "sistema de cache",
      "redirecionamento de páginas",
      "SEO do site",
      "design do cabeçalho",
      "design do rodapé",
      "carrossel de imagens",
      "sistema de comentários",
      "chat em tempo real",
      "carregamento de imagens",
      "modal de confirmação",
      "botão de ação principal",
      "sistema de logs",
      "tempo de resposta da API",
      "menu de navegação",
      "formulário de recuperação de senha",
      "listagem de usuários",
      "sistema de favoritos",
      "histórico de pedidos",
      "sistema de cupons",
      "cálculo de frete",
      "controle de estoque",
      "fluxo de onboarding",
      "integração com gateway de pagamento",
      "visualização de dados no dashboard",
    ];

    const taskName =
      chance.pickone(taskPrefixes) + " " + chance.pickone(taskSequences);
    cy.get(".drop-list > :nth-child(4)").within(() => {
      cy.contains("Adicionar Tarefa").click();
      cy.get("input").type(taskName);
      cy.get(".btn").click();
    });

    // Editar o card
    // Clicar no card recém-criado na nova coluna
    cy.get(".drop-list > :nth-child(4) .board-cards")
      .contains(taskName) // localiza pelo texto gerado
      .should("be.visible") // espera aparecer
      .click();

    const index = Math.floor(Math.random() * 3);

    const randomIndex = Math.floor(Math.random() * 3);
    const elementId = `#\\3${randomIndex} Color`;

    cy.get(elementId).click();

    // Criar tag do primeiro card
    cy.get("section > .custom-input > p").click();
    cy.get(".sc-gsnTZi").type("Tag 1");
    cy.get(".btn").click();

    // Clicar fora para fechar o modal. o Clique é feito no canto superior esquerdo
    cy.get("body").click(0, 0);

    // Criar segunda tarefa

    const taskPrefixesDois = [
      "Desenvolva",
      "Crie",
      "Corrija",
      "Implemente",
      "Ajuste",
      "Otimize",
      "Refatore",
      "Atualize",
      "Remova",
      "Melhore",
      "Configure",
      "Teste",
      "Documente",
      "Automatize",
      "Integre",
      "Separe",
      "Reorganize",
      "Reescreva",
      "Verifique",
      "Aplique",
      "Repare",
      "Simplifique",
      "Desabilite",
      "Habilite",
      "Revise",
      "Conserte",
      "Complete",
      "Padronize",
      "Renomeie",
      "Sincronize",
      "Depure",
      "Proteja",
      "Investigue",
      "Organize",
      "Analise",
      "Reduza",
      "Expanda",
      "Adicione",
      "Mapeie",
      "Acompanhe",
      "Remodele",
      "Personalize",
      "Valide",
      "Carregue",
      "Publique",
      "Implemente teste de",
      "Facilite",
      "Harmonize",
      "Planeje",
      "Isolamento de",
    ];

    const taskSequencesDois = [
      "front-end",
      "back-end",
      "funcionalidade de login",
      "funcionalidade de cadastro",
      "fluxo de pagamento",
      "fluxo de checkout",
      "carregamento da página inicial",
      "página de produtos",
      "componente de busca",
      "filtro de produtos",
      "integração com API externa",
      "sistema de notificações",
      "envio de e-mails",
      "layout responsivo",
      "formulário de contato",
      "painel administrativo",
      "módulo de relatórios",
      "geração de PDFs",
      "banco de dados",
      "API interna",
      "autenticação de usuários",
      "controle de permissões",
      "tratamento de erros",
      "performance do sistema",
      "segurança da aplicação",
      "upload de arquivos",
      "sistema de cache",
      "redirecionamento de páginas",
      "SEO do site",
      "design do cabeçalho",
      "design do rodapé",
      "carrossel de imagens",
      "sistema de comentários",
      "chat em tempo real",
      "carregamento de imagens",
      "modal de confirmação",
      "botão de ação principal",
      "sistema de logs",
      "tempo de resposta da API",
      "menu de navegação",
      "formulário de recuperação de senha",
      "listagem de usuários",
      "sistema de favoritos",
      "histórico de pedidos",
      "sistema de cupons",
      "cálculo de frete",
      "controle de estoque",
      "fluxo de onboarding",
      "integração com gateway de pagamento",
      "visualização de dados no dashboard",
    ];

    const taskNameDois =
      chance.pickone(taskPrefixesDois) +
      " " +
      chance.pickone(taskSequencesDois);

    cy.get(".drop-list > :nth-child(4)").within(() => {
      cy.contains("Adicionar Tarefa").click();
      cy.get("input").type(taskNameDois);
      cy.get(".btn").click();
    });

    // Clicar no segundo card
    cy.get(".drop-list > :nth-child(4) .board-cards")
      .contains(taskNameDois) // localiza pelo texto gerado
      .should("be.visible") // espera aparecer
      .click();

    // Selecionar a segunda cor
    const randomIndexDois = Math.floor(Math.random() * 3);
    const elementIdDois = `#\\3${randomIndexDois} Color`;

    cy.get(elementIdDois).click();

    // Criar tag do card 2
    cy.get("section > .custom-input > p").click();
    cy.get(".sc-gsnTZi").type("Tag 1");
    cy.get(".btn").click();

    // Clicar fora para fechar o modal. o Clique é feito no canto superior esquerdo
    cy.get("body").click(0, 0);

    // Excluir primeira tarefa
    cy.get(".drop-list > :nth-child(4)").within(() => {
      cy.get(".trash").then(($trashButtons) => {
        const randomIndex = Math.floor(Math.random() * $trashButtons.length);
        cy.wait(2000);
        cy.wrap($trashButtons[randomIndex]).click({ force: true });
      });
    });

    // Excluir a segunda tarefa
    cy.get(".drop-list > :nth-child(4)").within(() => {
      cy.get(".trash").then(($trashButtons) => {
        const randomIndex = Math.floor(Math.random() * $trashButtons.length);
        cy.wait(2000);
        cy.wrap($trashButtons[randomIndex]).click({ force: true });
      });
    });

    // Excluir coluna
    cy.get(".drop-list > :nth-child(4) div.trash svg").first().click();
  });
});
