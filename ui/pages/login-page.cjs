const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.btnLogin = page.getByRole("button", { name: "Login" });
  }

  async goto() {
    await this.page.goto("http://lojaebac.ebaconline.art.br/my-account/");
  }

  async login(email, senha) {
    //lucas.evangelista+tcc@ebac.art.br TesteEbac159!
    await this.username.fill(email);
    await this.password.fill(senha);
    await this.btnLogin.click();
  }
};
