<p align="center">
    <strong><font size="+2">Usando Whatsapp API com Javascript</font></strong>
    <br/>
    <strong><font size="+1" align="center">
      <a href="https://moorse.io/">Nosso Site</a>
      <span> · </span>
      <a href="https://moorse.readme.io/">Readme IO/Documentação</a>
    </font></strong>
</p>

Este é um exemplo simples da utilização da API do [Moorse](https://github.com/moorseio) para envio de mensgagens utilizando node.


## Instalação
1. Clone o repositorio:
```bash
$ git clone https://github.com/moorseio/moorse-javascript-example.git
```
2. Instale as dependências:

```bash
$ cd moorse-javascript-example
$ yarn 
```

3. Abra `config/index.js` e adicione suas informações configurações.
```js
const YOUR_TRIAL_NUMBER = 551199999999
const DESTINATION_NUMBER = 551199999999
const USER = 'moorseexample@moorse.com'
const PASSWORD= '123456'
```

YOUR_TRIAL_NUMBER numero de sua integração.
DESTINATION_NUMBER numero informado na hora de cadastro na ferramenta.
USER email utilizado no cadastro 
PASSWORD senha utilizada no cadastro

Se houver criado um novo grupo na ferramenta, configurar o GROUPID.

```js
const GROUPID = 'Grupo id que é disponibilizado dentro da ferramenta'
```

4. Execute o examplo:
```bash
yarn start
```

5. Ao executar o comando anterior, você deve receber as mensagens tanto no grupo cadastrado
quanto no número informado.

### :mag: Veja também

Além do Javascript, nós temos exemplos nas mais variadas linguagens utilizadas no momento. Veja abaixo todas as opções que temos disponíveis:

- [Typescript](https://github.com/moorseio/moorse-typescript-example)
- [Python](https://github.com/moorseio/moorse-python-example)

<a id="structure"></a>
