import { $ } from "@wdio/globals";

class AddressPage {
  get inputName() {
    //Teste Endereço
    return $(`-ios predicate string:value == "Enter your name"`);
  }
  get inputNumber() {
    //55719999999
    return $(`-ios predicate string:value == "Enter your mobile number"`);
  }
  get inputAddress() {
    //Rua Sete de Setembro
    return $(`-ios predicate string:value == "Enter your address"`);
  }
  get inputCity() {
    //Salvador
    return $(
      `-ios predicate string:value == "City" AND type == "XCUIElementTypeTextField"`
    );
  }
  get inputState() {
    //Bahia
    return $(
      `-ios predicate string:value == "State" AND type == "XCUIElementTypeTextField"`
    );
  }
  get inputZipCode() {
    //41600500
    return $(
      `-ios predicate string:value == "ZipCode" AND type == "XCUIElementTypeTextField"`
    );
  }
  get btnSave() {
    return $(`~save`);
  }

  async addNewAddress() {
    await (await this.inputName).setValue("Teste Endereço");
    await (await this.inputNumber).setValue("55719999999");
    await (await this.inputAddress).setValue("Rua Sete de Setembro");
    await (await this.inputCity).setValue("Salvador");
    await (await this.inputState).setValue("Bahia");
    //insere o valor do zipcode e da enter por isso não é necessário clicar no botão de salvar
    await (await this.inputZipCode).setValue("41600500\uE007");
    // await (await this.btnSave).click();
  }
}

export default new AddressPage();
