# Template de um projeto de API utilizando Clean Architecture 

![Logo do Projeto](./documentation/codeforall.jpeg)

## Descrição
Esse template tem com objetivo acelerar o desenvolvimento de novos microserviços seguindo um padrão em comum.
O projeto define uma estrutura utilizando Clean Architecture e Design Patterns
Ao baixar o templates todas as configurações de estrutura estarão prontas:
- Testes unitários
- Testes E2E
- Variaveis de ambiente
- Lint
- Prettier
- Docker para uma ambiente estavel
- CI/CD

## Instalação

1. Clone este repositório: `git clone https://github.com/devmaykinho/boilerprate-nestjs-docker-clean-arch.git`
2. Entre no diretório do projeto: `cd boilerprate-nestjs-docker-clean-arch`
3. Instale as dependências: `yarn install`

## Uso

Para executar o projeto localmente, use o seguinte comando:

```bash
yarn run up
```

Para executar os testes unitários manualmente, use o seguinte comando::

```bash
yarn run test
```

Para executar os testes e2e manualmente, use o seguinte comando::

```bash
yarn run up:e2e
```

## CI/CD
- No pré commit é rodado automaticamente o lint, testes unitários e audit. Caso exista algun teste falhando, problema de lint ou audit commit irá falhar
- Após o push no github é executado novamente o lint, testes unitários e audit

## Entendendo a arquitetura
![Clean Architecture](./documentation/clean-architecture.jpg)


- Funcionalidade A
- Funcionalidade B
- Funcionalidade C