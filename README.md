# Ecommerce WineDrop

<details open="open">
  <summary><h2 style="display: inline-block">📜 Sumário</h2></summary>

- [Sobre o projeto](#sobre-o-projeto)
- [Usando](#usando)
- [Rotas](#rotas)


</details>

<a name="sobre-o-projeto"></a>

## 📋 Sobre o projeto
### tecnologias e ferramentas

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![REACT](https://img.shields.io/badge/-React-blue?style=for-the-badge&color=5ed2f2&logo=react&logoColor=000000)
![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&loo=javascript&logoColor=%23F7DF1E&logo=javascript&logoColor=%23F7DF1E)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white)

### Idealização do projeto
- Esse projeto foi pensado para ser um ecommerce de vinho e seus derivados, onde possui cadastro e login, sistema de produtos, filtros de produtos, carrinho e tela de administrador, que usada com um email especial, o administrador poderá deletar e cadastrar um novo produto.

### link do Back-end desse projeto
- https://github.com/igorhnovais/API-EcommerceWine
<a name="usando"></a>

## 🏁 Usando

Clone o repositorio

```bash
$ git clone https://github.com/igorhnovais/FRONT-ecommerceWine.git

```

Instale as dependências

```bash
$ npm i
```

E por fim, rode o comando para iniciar a aplicação

```bash
$ npm start
```

<a name="contribuindo"></a>

## 🏁 Rotas

1. Rota inicial:

    Route: ```"/"```
    
    Desrição: essa rota redireciona para a rota de produtos da home.

2. Rota para cadastrar um novo usuario:
    
    Route ```"/sign-up"``` 

    Desrição: nela você consegue se cadastrar para poder usar o app. 
    
    Entrada:
    ```bash
        {
            "name": "igor",
            "email": "igor@driven.com.br",
            "password": "driven",
            "confirmPassword": "driven"  
        }
    ```

3. Rota para fazer login no app:
    
    Route: ```"/sign-in"``` 

    Desrição: nela você consegue por seu email e senha já cadastrados anteriormente e assim terá acesso ao app.
    
    Entrada:
    ```bash
        {
            "email": "igor@driven.com.br",
            "password": "driven"  
        }
    ```
4. Pegar todos os produtos do ecommerce:
    
    Route: ```"/products"``` 

    Desrição: nessa rota vai aparecer todos os produtos disponiveis do ecommerce

5. Pagina do produto: 

    Route get: ```"/product/:productId"``` 
    
    Desrição: nessa rota aparece o produto sozinho, onde está todas as suas descrições e um botão pra adicionar no carrinho caso o usuario ja esteja logado. 


6. Carrinho:

    Route post: ```"/cart"```
    
    Desrição: Essa é a rota onde vc vai encontrar o seu carrinho, se não tiver nenhum produto, ele te direciona pra home.
    Caso ja tenha produtos inseridos, ele vai te listar esses produtos e o valor do carrinho em baixo, junto com o botão de compra, onde vc será redirecionado para a Api externa da stripe

    


7. Rota do administrador:

    Route put: ```"/adm"```
    
    Desrição: Nessa rota apenas o administrador tem acesso, e nela ele poderá adicionar um novo produto ou remover um produto ja existente.

    Entrada para novo produto: 
    ```bash
    {
        "image": "https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png",
        "name":"Davideira",
        "description": "O nome Davideira faz alusão ao fruto que sai da videira, a uva. Em Portugal, as uvas crescem há mais de 4 mil anos. É um cultivo que faz parte da história do país. Esse vinho é uma homenagem à uva, elaborado com castas típicas do país.",
        "type": "Portugal Tinto Meio Seco 750 ml",
        "alcohol": "13.00% ABV",
        "value": 6490,
        "type_product": "wine"
    }
    ```

1. Rota inexistente:

    Route: ```"*"```
    
    Desrição: nessa rota, caso o usuario escreve uma rota qualquer na url inexistente, é redirecionado para a rota "/404".

8. Rota 404 (not found):

    Route: ```"/404"```
    
    Desrição: Caso seja redirecionado pra essa rota, mostra pro usuario que não existe e pede pro usuario voltar pra home.


