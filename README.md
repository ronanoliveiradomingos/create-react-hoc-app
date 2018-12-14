[link publicado](https://ronanoliveiradomingos-react-hoc.netlify.com/) 

Na implementação será feita uma chamada à rota da API correspondente ao componente no HOC fetchAPI, e aí enquanto o withLoading não receber o payload, ele tratará de ficar exibindo o loading. Quando o fetchAPI repassar o payload para o withLoading, ele passará a exibir o componente (Infos, ReposList ou StarredList) repassando o payload a ele para que ele seja preenchido.

App<br>
 |<br>
 |---> fetchAPI ---> withLoading ---> Infos<br>
 |<br>
 |---> fetchAPI ---> withLoading ---> List<br>
 |<br>
 
Artigos usados no exemplo: <br>
[Meu primeiro Higher-Order Component](https://medium.com/reactbrasil/meu-primeiro-higher-order-component-a376efc654a8)<br>
[Meu primeiro Higher-Order Component — Parte 2](https://medium.com/reactbrasil/meu-primeiro-higher-order-component-parte-2-fb0ad6922a9c)<br>

No diretório do projeto, você pode executar:<br>

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.<br>
Open [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.. <br>

Utils para desenvolvimento:<br>

[Mocky](https://www.mocky.io/)<br>

[Info gihub - https://api.github.com/users/{username}](https://api.github.com/users/{username})<br>

[Info repositório github - https://api.github.com/users/{username}/repos](https://api.github.com/users/{username}/repos)<br>

[Info favoritos github - https://api.github.com/users/{username}/starred](https://api.github.com/users/{username}/starred)<br>