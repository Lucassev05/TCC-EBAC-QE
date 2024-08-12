import request from "supertest";
import { expect } from "chai";
import faker from "faker-br";
import contract from "../contract/cupons.contracts.js";
import helpers from "../helpers/cupons.helpers.js";
import fixtures from "../fixtures/cupons.fixture.json" assert { type: "json" };

describe("Cupons", () => {
  it("CT009 – Criar cupom de desconto", async () => {
    const headers = helpers.getHeaders();
    const body = {
      code: `Teste ${faker.random.number()}`,
    };

    const response = await request(
      "http://lojaebac.ebaconline.art.br/wp-json/wc/v3"
    )
      .post("/coupons")
      .set(headers)
      .send(body);

    await contract.cuponsCreateSchema.validateAsync(response.body);
    expect(response.status).to.equal(201);
    expect(response.body).to.be.an("object").and.not.be.empty;
  });

  it("CT010 – Criar cupom de desconto com nome repetido", async () => {
    const headers = helpers.getHeaders();
    const body = fixtures.CT010.body;
    const expectedResponse = fixtures.CT010.expectedResponse;

    const response = await request(
      "http://lojaebac.ebaconline.art.br/wp-json/wc/v3"
    )
      .post("/coupons")
      .set(headers)
      .send(body);

    await contract.errorResponseSchema.validateAsync(response.body);

    expect(response.status).to.equal(400);
    expect(response.body)
      .to.be.an("object")
      .and.to.deep.equal(expectedResponse);
  });

  it("CT011 – Listar cupons de desconto", async () => {
    const headers = helpers.getHeaders();

    const response = await request(
      "http://lojaebac.ebaconline.art.br/wp-json/wc/v3"
    )
      .get("/coupons")
      .set(headers);

    //validação de contrato
    await contract.cuponsListSchema.validateAsync(response.body);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array").that.is.not.empty;
  });
});
