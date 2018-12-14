Na implementação será feita uma chamada à rota da API correspondente ao componente no HOC fetchAPI, e aí enquanto o withLoading não receber o payload, ele tratará de ficar exibindo o loading. Quando o fetchAPI repassar o payload para o withLoading, ele passará a exibir o componente (Infos, ReposList ou StarredList) repassando o payload a ele para que ele seja preenchido.

App
 |
 |---> fetchAPI ---> withLoading ---> Infos
 |
 |---> fetchAPI ---> withLoading ---> List
 |
 
Artigos usados no exemplo: 
[Meu primeiro Higher-Order Component](https://medium.com/reactbrasil/meu-primeiro-higher-order-component-a376efc654a8)
[Meu primeiro Higher-Order Component — Parte 2](https://medium.com/reactbrasil/meu-primeiro-higher-order-component-parte-2-fb0ad6922a9c)

No diretório do projeto, você pode executar:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.<br>
Open [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador..
