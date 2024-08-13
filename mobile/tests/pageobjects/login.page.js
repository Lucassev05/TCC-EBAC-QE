import { $ } from "@wdio/globals";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  get inputEmail() {
    return $("id:email");
  }

  get inputPassword() {
    return $('-ios predicate string: name == "Password"');
  }

  get btnLogin() {
    return $("~btnLogin");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputEmail.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new LoginPage();
