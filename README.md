# PokéDex

### Bem-vindo ao exercício de AngularJS da redspark!

Este exercício tem como propósito testar as suas habilidades com AngularJS.
Para que possa realizar o teste, clone este repositório em sua máquina, e ao finalizar a sua abordagem, submeta um `pull request` para nós!

Para iniciar essa aventura, você precisará de:
* Node
* NPM
* Bower
* Gulp

Recomendamos instalar o Node e NPM via NVM (https://github.com/creationix/nvm).
A versão do Node deve ser 4.0+ (Recomendamos a última versão estável disponível).

As demais dependências estão no projeto, e são instaladas através dos comandos `npm install` e `bower install`. (Você também pode usar o `yarn`, se preferir!)

### O que o projeto já oferece
* Toda a estrutura para desenvolvimento, testes e build
* As constantes necessárias para acessar a PokéAPI e os Sprites já configuradas

### O que deve ser feito
1. Acesse o projeto de exmplo para entender o que sua aplição precisará fazer: http://dmz.redspark.io/redspark-pokedex/
2. Clone o projeto em sua máquina e observe sua estrutura. Valide como os arquivos estão distribuídos, IIFEs, estrutura de modules, etc.
3. Explorar a PokéAPI, pois será necessário para realizar as integrações (http://pokeapi.co).
4. Você deve implementar, assim como é mostrado na aplicação de exemplo:
    * Um componente PokéDex que exibe uma lista de `region` no lado esquerdo, e uma lista de `pokemon` que habitam aquela `region`. Leve em consideração que poderíamos trocar ambas as listas apresentadas na tela por quaisquer outras duas, seguindo um padrão de `master-detail`, e portanto, você deve fazer a estrutura deste componente o mais genérico possível, para facilitar um possível upgrade na PokéDex no futuro.
    * Um controller que deve ser atrelado a única rota da aplicação (`/`), e ser o responsável por manejar as listas e buscas a serem realizadas.
    * A `region` pesquisada deve ser inserida como um `query parameter` para que ao enviar esta URL para um outro mestre pokémon ou então dar um refresh no seu navegador, a busca possa ser realizada automaticamente, trazendo o mesmo resultado antes exibido.
    * Um filter que deve receber um objeto e devolver um html contendo o `sprite` do pokémon, assim como sua posição na lista de pokémon, seguido de seu nome.
    * Um `service` de mensagem que utiliza o `toastr`, com um método que exibirá um erro na tela.
    * Um `interceptor` que irá ficar responsável por tratar erros `401`, `403` e `404`, além de ter um tratamento `default` para outros códigos de erro que possam ser retornados.
    * O layout pode ser diferente do apresentado na aplicação de exemplo, desde que se utilize de recursos do `SASS` como varíaveis e mixins, além de aninhamento de seletores.
5. ATENÇÃO: A aplicação já possui testes unitários para auxiliar você! Execute-os com `gulp test` ou `gulp test:auto` para ter um guia para seu desenvolvimento. 
5. Existe uma task do `gulp` que não está funcionando corretamente. Você perceberá que a versão de distribuição não está exibindo as imagens do logotipo `redspark` e o `gif` de carregamento. (Execute `gulp serve:dist` para testar a versão de distribuição)    
6. Lembre-se de testar o seu projeto utilizando o comando `gulp serve:dist`, que levanta um servidor local com a versão de distribuição da aplicação. Essa será a versão que iremos avaliar.
7. Após finalizar, submeta o seu código via `pull request` para que possamos analisá-lo.
8. Boa sorte, mestre pokémon!

### Rodando o projeto
A base deste projeto utiliza o `gulp` como task runner (http://gulpjs.com). Ele está configurado para as seguintes tasks:
* `gulp serve`: inicia o ambiente de desenvolvimento
* `gulp serve:dist`: inicia um ambiente com a versão de distribuição. Importante para saber com o projeto se comportará após processado e minificado. Como iremos validar se a versão de distribuição da sua PokéDex funciona, lembre-se de validar utilizando este comando
* `gulp build`: gera a versão de distruibuição, mas sem iniciar um ambiente
* `gulp test`: roda os testes unitários
* `gulp test:auto`: fica executando os testes unitários em modo `watch`
* `gulp clean`: limpa as pastas `.tmp` e `dist`, permitindo apagar qualquer resquício que possa atrapalhar a execução do projeto