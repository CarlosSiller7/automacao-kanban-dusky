import Chance from "chance";
const chance = new Chance();

describe("Teste de criação de tarefa", () => {
  it("Deve criar uma tarefa dentro de uma coluna.", () => {
    cy.acessarSite();

    //Variáveis
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

    const index = Math.floor(Math.random() * 3);

    const randomIndex = Math.floor(Math.random() * 3);
    const elementId = `#\\3${randomIndex} Color`;

    cy.get(".custom-input").eq(index).click();
    cy.get(".sc-gsnTZi").type(taskName);
    cy.get(".btn").click();

    cy.get(".board-cards")
      .eq(index)
      .contains(taskName, { timeout: 5000 })
      .should("be.visible")
      .click();

    cy.get(elementId).click();

    cy.get("section > .custom-input > p").click();
    cy.get(".sc-gsnTZi").type("Tag 1");
    cy.get(".btn").click();
  });
});
