# TCC EBAC - Engenheiro de Qualidade de Software

## Descrição

Este projeto é parte do Trabalho de Conclusão de Curso (TCC) para o curso de Engenharia de Qualidade de Software da EBAC. O objetivo principal é planejar e implementar testes para uma aplicação, cobrindo testes de interface de usuário (UI), API, mobile e performance. Além disso, os testes são integrados em um pipeline de Integração Contínua (CI) usando GitHub Actions para garantir a qualidade contínua da aplicação.

## Estrutura do Projeto

- **Testes de UI**: Automatizados usando [Playwright](https://playwright.dev/).
- **Testes de API**: Automatizados usando [Mocha](https://mochajs.org/) com [Chai](https://www.chaijs.com/) e [Supertest](https://github.com/visionmedia/supertest).
- **Testes Mobile**: Automatizados usando [Appium](https://appium.io/) e executados no [Sauce Labs](https://saucelabs.com/).
- **Testes de Performance**: Automatizados usando [K6](https://k6.io/).
- **Relatórios**: Gerados usando [Allure](https://docs.qameta.io/allure/).

## Configuração

Certifique-se de ter todas as dependências instaladas:

```bash
npm install
```

## Configuração de Ambiente

Crie um arquivo .env para definir variáveis de ambiente necessárias para a execução dos testes.
Veja o arquivo
[.env.example](.env.example) para mais detalhes.

## Scripts de Teste

### Testes de UI

Executa os testes de interface de usuário com Playwright:

```bash
npm run ui-test
```

### Testes de API

Executa os testes de API com Mocha:

```bash
npm run api-test
```

### Para executar os testes de API com um relatório no terminal:

```bash
npm run api-test:spec
```

### Testes Mobile

Executa os testes mobile usando Appium no Sauce Labs:

```bash
npm run mobile-test
```

Certifique-se de que suas envs estão definidas corretamente.

### Testes de Performance

Executa os testes de performance localmente:

```bash
npm run performance-test
```

<!--
Executa os testes de performance na nuvem (Grafana Cloud):

```bash
npm run performance-test:cloud
```

Executa os testes de performance localmente e envia os resultados para a nuvem (Grafana Cloud):

```bash
npm run performance-test:localtocloud
``` -->

### Relatórios

Gera relatórios Allure a partir dos resultados dos testes:

```bash
npm run allure
```

## Executando Testes no CI

O projeto usa GitHub Actions para o pipeline de CI. As variáveis de ambiente devem estar corretamente configuradas no ambiente de CI para que os testes possam ser executados com sucesso.

- **SAUCE_USERNAME** e **SAUCE_ACCESS_KEY** devem ser configurados como segredos no repositório.
- **REPORT_ENVIRONMENT** e **PLATFORM** devem ser definidos como variáveis de ambiente no repositório.

Para disparar o CI, é necessário abrir uma Pull Request (PR) para a branch `main`.

## Dependências

- [Playwright](https://playwright.dev/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Appium](https://appium.io/)
- [Sauce Labs](https://saucelabs.com/)
- [WebdriverIO](https://webdriver.io/)
- [K6](https://k6.io/)
- [Allure](https://docs.qameta.io/allure/)

## Licença

Este projeto é licenciado sob a Licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
