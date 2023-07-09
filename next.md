# Next
o next é um framework que nasceu para criar algo para resolver o problema da parte de indexação SEO das SinglePageAplication.
* no formato SPA original a gente tem o frontend com uma parte de usuarios que faz uma requisição para a api que vai buscar os dados no anco de dados e devolver uma resposta para o frontend em JSON que vai ser interpretada e convertida em HTML. o problema disso é que o frontend e o back end são coisas completamente diferentes. e nesse caso o processo de buscar coisas no backend so pode ser iniciado depois que o frontend for carregado. o SPA apesar de resolver muitos problemas causava esse problema de não ser facilmente indexavel para o google e outros (apesar de hoje isso ja estar melhor) quando esses bot acessam nossa aplicação eles acessao com o javascript desabilitado para ser mais rapido ou até eles tem um timeout muito curto ou seja eles não aguardam as requisições http finalizar. 
* ssr (server side rendering)
o next vai usar o ssr que é um conceito para lidar com isso. quando o usuario acessa o nosso frontEnd ao invez dele acessar diretamente o frontend, na verdade ele vai acessar um backend de nossa aplicação porem esse backend que ele vai acessar não é o nosso backend (a ossa api) ele vai acessar um terceiro serviço chamado de next. que é um servidor escrito em node.js.
ou seja o fluxo do next é o seguinte
backend => frontend => next
e o usuario acessa do next para o front para o back.
o codigo react é um codigo em javascript e o node é uma plataforma para executar javascript. então o node consegue entender codigo react mesmo pelo lado do backend. o usuario vai usar a aplicação pelo next que vai fazer uma requisição para o backend que vai devolver para o next uma resposta em json o servidor next ainda em uma camada backend monta o html da pagina e isso é devolvido para o usuario pelo front end. em outras palavras, o cliente entra no meio do ciclo e depois recebe o produto final no frontend.
isso da como resultado que quando a gente acessar a aplicação fronteend ela n ão carrega parte do codigo javascript antes de fazer a requisição ao backend. ela fica em estado de idle, aguardando uma resposta de servidor até ela ter algo visual para ser exibido em tela.
# outras funcionalidades do next
SSG static site geeration - um site que não tem atualizações toda hora, vamos dizer que ele so tem atualização a cada dez minutos. so que imagina que nesse intervalo de dez minutos ele recebeu 1 bilhão de acessos, ele iria gerar um bilhoes de requisições retornsos e etc, o processo se repetiria 1 bilhão de vezes. porem com o ssg a gente pode fazer com que por exemplo a home fique estatica, em cash; sem gerar novos carregamentos por um intervalo de tempo a gente pode colocar que a pagina home so seja gerada uma vez a cada 10 minutos e que ela ficara gerada la no frontend, sem precisar pedir requisições do backend. então durante dez minutos todo mundo que acessar a pagina vai receber as mesmas informaçéoes que são as que estão la nessa pagina gerada e estatica. em outras palavras a partir do momento que o usuario tenta acessar a pagina o frontend vai procurar no cash do nosso servidor que é um cdn geralmente(content delivery network) ai ele procura la se existir o arquivo o processo não precisa ser feito e ele pega esse arquivo la, se não existir ele faz todo o processo de gerar a pagina do zero, indo na backend e etc e apos servir a pagina ele salva ela no cash, e apos dez minutos se reincia esse sistema.

## criar um projeto em next
assim como no react a gente vai copiar um npm
 npx create-next-app@latest(tem o codigo no site deles next.org)
 vamos dar Y
 dar um nome ao projeto 
 o next faz a instalação das dependencias ja no momento que a gente cria ele. a gente pode instalar o npm se não ja estiver instalado.
 usando o npm i .
 o next no package json ja deixa alguns scripts preparados. o mais importandte é o dev, que a gente usa rodando o npm run dev. igual os react e la ele te da um endereço para a gente ver nosso projeto rodando, um localhost. é bm saber que o next é tambem um react, assim como qualquer react. então o nosso projeto em next vai tambem ser um projeto em react.
 * estrutura do next
 no next deveriamos ja ter uma pasta page, que eu não tenho nesse progeto, talvew para mim tenha sido substituido por app. todas as paginas do nosso projeto vão passar por essa pasta pages. nela deveria ter um arquivo chamado app e um chamado index os dois .js
 os arquivos do video parecem muito com os meus arquivos do app apesar de não serem iguais.
 pasta public:
 na pasta public vemos arquivos publicos como os icones e tudo mais, podemos deletalos
 podemos tambem apagar toda  a pasta styles, no index (ou no meu caso page ) removemos as imoortações e podemos apagar todo o codigo e deixar so um helloworld. no layout a gente faz alterações para deixar ele assim : 
 

export default function App({
 Component, pageProps}) {
  return <Component {pageProps} />
}

e vamos ter alguns erros de typescript mas vamos instalar isso como dependencia para funcionar vamos dar um 
npm i typescript @types/react @types/node -D
a gente pode criar uma pagina src e mover a pagina pages para dentro do src. as paginas são obrigatoriamente na pasta pages, mas essa pasta pages pode ficar dentro do src.
ja a public precisa ficar fora.
é imoortante saber que o arquivo index sempre vai ser a nossa home então o que a gente quiser que renderize na home a gente tem que colocar la nesse index. no meu caso page. se a gente colocar no endereço uma /algo o next nos mostra uma pagina 4°04 por padr ão a não ser que esse endereço exista. é bom saber que essa pagina 404 é configuravel a gente pode modificar ela para mostrar o que a gente quer.
eu vou criar outro projeto para ver se a configuração fica certa.
refiz o projeto agora dando não para type script
yes para eslint
nãpo para css tailwind
yes para src directory
não para app router
não para import alias
e a estrutura do projeto agora tem as pages  e esta igual a da rocketseat.
# file system routing
roteamento de sistema de arquivos. uma das coisas legais do net é que ele permite isso, o que na pratica é ao criar uma pagina, caso eu queria que uma pagina seja acessivel aousuario pelo endereço /products é so eu criar dentro da pasta pages do meu projeto um arquivo chamado products.
ou seja todo arquivo criado dentro da pasta pages vira automaticamente uma rota, menos alguns expessifivos como o app que vamos falar mais tarde.
com isso não precisamos mais de tudo aquilo de configurar o react routerdom e etc.
porem as rotas precisam de parametro as vezes. por exemplo a gente precisa saber qual produto o usuario clico a gente faz isso com parametros com por exemplo id. então se a gente fizer /products/1 seria um parametro. mas o next não vai entender isso diretamente como um parametro, ele vai passar a procurar por alguma rota que tenha esse endereço. enão quando a gente for trabalhar com arametros vamos ter que configura-los.
mas outra coisa que podemos fazer tambem é criar subpastas dentro da pages. se a gente criar uma pasta chamada product e dentro dela colocar o arquivo product com o nome de index o endereço vai continuar fucnionando porque a index vai ser a home do product ou seja o / do product, dessa forma se q gente colocar denro dessa mesma pasta uma paginachamada 1 o endereço dela vai ser product/1
porem o mais legal disso tudo é que o nome desses arquivos podem ser parametrizados. então se a gente trocar  nome do arquivo por colhece [] e dentro do colchete o parametro que a gente queira usar vai funcionar.
então se eu no lugar de index colocar [id] ele vira uma rota wildcard e todo que vier depois da barra vai cair ali. ai dentro da pagina a gente pode pegar o valor do parametro usando um import do next o useRouter. caso a importação não faça automaticamente a gente vai no ts config e coloca o moduleresolution como sendo node. "moduleResolution": "node",

ai usando o useRouter a gente tem acesso ao nosso use params que estão dentro do objeto chamado query que que vem nesse useRouter.  se a gente mostrar em tela o objeto query no caso do endereço /1 ele vai vir 1 se usar 2 vai vir 2 e por ai vai? então podemos usar esse id que vem da query para buscar um produto especifico de nossa api.
a pagina id fica assim:
