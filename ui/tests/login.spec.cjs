const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login-page");

test.describe("Login", async () => {
  test("CT005 - Logar com usuário válido e ativo", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("lucas.evangelista+tcc@ebac.art.br", "TesteEbac159!");
    await expect(
      await page.getByText(
        "Olá, lucas.evangelistatcc (não é lucas.evangelistatcc? Sair)"
      )
    ).toBeVisible();
  });

  test("CT007 - Logar com usuário ou senha incorreto", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("lucas.evangelista+tcc@ebac.br", "TesteEbac1!");
    await expect(
      page.getByText(
        `Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.`
      )
    ).toBeVisible();
  });
});
