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

vamos agora instalar as fontes. pegamos a fonte no google fonts como sempre.
no nex nos não temos acesso a aquele index para modificar as coisas base do projeto como a fonte. então para mudar isso a gente tem que criar um docmumento na pages chamado _document.tsx esse arquivo document tambem vai ser um componente ent<éao tambem vamos fazer nele uma export fucntion document.> é importante entender que no next tudo são compponentes inclusive o html da pagina como um todo. e desse document vamos fazer o html da pagina. porem não vamos usar tags tradicionais como o head ou etc. a gente vai importar componentes de dentro de uma biblioteca chamada next/document. vamos importar o Html Head Main e 
vamos usar o Html importando para ficar em volta de tudo, odentro dele o Head. o body vamos usar a tag original do html porque não tem um pra importar do nextDocument ai dentro do head nos vamos colar as importações de fontes que fizemos. o crossorigin a gente tem que colocar o O em maic=suclo e dar um valor para ele. damos o valor de anonymous.
dentro do body nos colocamos a tag Main. ele serve para indicar para o next em qual lugar da aplicação vao as conteudos das paginas carregadas sob demanda de acordo com a rota acessada.
por fim dentro do body colocamos o nexScript que é em qual lugar da pagina a gente vai colocar os scripts da pagina. a ideia é colocar o nextScript no fim da tag body.
o document fica assim:
import { Html, Head, Main, NextScript } from "next/document"

export default function document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
        </Html>
    )
}

apos isso e sempre que modificarmos algo no document da aplicação temos que reiniciar o servidor. porque o next so le ele uma vez.
caso as alterações não se apliquem talvez seja um erro de cash então a gente deleta a pasta .next e roda npm run dev que ele vai recriar a psata .next e e as atualizaçãoes serão feitas. é imoortanten saber qe o document é o indext do nosso projeto e qualquer coido colocado nele vai ser carregado em todas as paginas da aplicação então se quisermso importar algio que não vai estar em todas as paginas vai ter um outro lugar melhor para importar essas coisas, inclusive no arquivo app. o _document.tsx geralmente vai ser o mais simples possivel.

# stiches
stiches é uma bibliotaca para estilização  que é uma alternativa ao styled components. nos temos que instala-la.
porem ela tem uma forma de escrever uma estilização um pouco diferente que é melhor para variações de estilos baseadas em propriedades.
o next e stiches funcionam bem juntos
npm i @stitches/react
a gente instala ele com o comando a cima e dpois vamos na pasta src e criamos uma pasta styles e dentro dela um index.ts

la vamos importar a createStitches  e com isso nos podemos criar uma const para configurar algumas coisas dentro da aplicação. e criar variaveis para fazer um theme global. dentro de theme se dermos u
m cntrl space a gente ve varias coisas que da para configurar. vamos por exemplo mexer nas cores e criar uma cor chamada rocket seat.
a pagina fica assim:
import { createStitches } from "@stitches/react";

const config = createStitches({
    theme: {
        colors: {
            rocketseat: '#8257e0',
        }
    }
    
})

para ter acesso a esse config a gente precisa exportar ele , mas a gente pode fazer isso de formas diferentes. o problema é que existem muitas coisas dentro do config então o melhor jeito é darmos um export const e no lugar de config a gente desestruturar.
fica assim:
import { createStitches } from "@stitches/react";

export const {
    config, styled, css, globalCss, keyframes, getCssText, theme, createTheme,
} = createStitches({
    theme: {
        colors: {
            rocketseat: '#8257e0',
        }
    }
    
})

agora quando a gente for usar em algum outrolugar vamos importar essas coisas. por exemplo, vamos fazer um button no index vamos fazer uma const Button = styled (tem que ser o styled que vem de nossa pasta styles)
por ser uma função vamos abrir parenteses depois do button (diferente do styledcomponents que era um . o stiches por tratar de uncções usa parenteses.) e ai vamos dar dois parametros a essa função, o primeiro vai ser a tag html entre aspas. e o segundo vai ser um objeto com a nossa estilização. para escrever a estilização vamos escrever como se fosse javascript então a sintax tambem vai ser igual javascript. então ao inves de escrever background-color vamos escrever backgroundColor. ai no nosso backgroundColor se a gente der um cntrl espaço ele vai nos mostrar a $rocketseat que é a cor que criamos, mas tem varias outras cores tambem que podemos usar (tem que estar entre aspas). vamos trocar o h1 pelo button para testar a pagina fica assim:
import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat'
})

export default function Home() {
  return (
   <button>Enviar</button>
  )
}

e ai podemos nesse const styled colocar qualquaer outra estilização. um borderRadius por exemplo, por ser numerico não precisamos colocar como string assim '8px' a gente pode botar so 8 que ele vai coverter para pixel. porem se quisermos podemos colocar '8px' tambem.
assim como o styledcomponents a gente pode fazer encadeamento e tambem com coisas como hover, so prestar atenção nos { } e nas aspas. fica assim:

import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: '4px',
  border: 0,
  padding: '4px 8p',

  span : {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }

})

export default function Home() {
  return (
   <Button>
    <span>teste</span>
    Enviar</Button>
  )
}

é impostante saber que como o stitches funciona com javascript se a gente estiver com o javasciprt desabilitado, ele não vai funcionar, porque ele aplica o css em runtime, ou seja em tempo de execução o html é renderisado no serverside render, e ele fica armazenado, porem o css é direto no no frontend, então ele é montado a cada vez. podemos mudar para o css ficar direto no servidor next e não so no frontend. na documentação do stiches a gente pode olhar o serverside render e mudar ele ele para ele sempre renderizar com o css no servidor e n éao so no css. temos que ir la no _document, na head a gente vai colocar uma tag styles com id stiches e vamos colocar o dangeroslysetinHTML=({__html: getcsstext()} ) 
a gente passa para o dangerosly a funçõa gethtmltext que vem do nosso config.
essa função getcsstext ela vai pegar o css e escrever dentro de uma tag style de html la no head do html.
fica assim:
<style id="stitches" dangerouslySetInnerHTML={{__html: getCssText() }} />
   
   vamos agora fazer um arquivo global.tsx no styles e nele vamos dar os estilos globais. e dela importanmos o globalCss do . atenção nao do stitches. e fazermos nossa const globalstyles e dentro do objeto criamos nossos estilos globais.
   como o document é o base la que so carrega uma vez q gente não recomenda coocar a chamada do globalStyles nele, e sim do app.
   o app funciona como um wrapper um container para as paginas de nossa aplicação então ele via ser carregado junto com qualquer pagina de nossa aplicação., o app carrega a pagina atravez do components
   vamos incluir a tipagem do component no app importando o appProps do next.  e vamos chamar a função globalStyles antes da função. o arquivo app fica assim :
   import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

  globalStyles()

export default function App({ Component, pageProps }:AppProps) {  

  return <Component {...pageProps} />
}

colocamo o globalStyles fora da função porque se n ão toda a vez que a gente trocar de pagina tudo que esta dentro do app enquanto na verdade o globalstyles não muda então é melhor ele ficar fora.

o arquivo do globalStyles fica assim:
import { globalCss } from ".";

export const globalStyles = globalCss({
    '*' : {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialised'
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,

    }
})
essa é a sintax para escrever estilos no stitches.

# cabeçalho da aplicação
vamos no arquivo app
dentro do return tudo que a gente escrever vai aparecer em todas as paginas. então ja temos o componente la que é a parte modular da aplicação,; mas se a gente quiser algo fixo a todas as paginas vamos colocar la tambem. ao invz de criar um componente header a gente vai criar a nossa header direto no app.
ao importar o logo ele deu problema e não aparecia então importamos ele como logo.src
a gente não cria um componente para o header e nem para os setilos deles pq tudo que a gente colocar na pasta pages vira uma rota da aplicação. então com o next a gente cria as estilizações dentro da pasta styles. la a gente cria uma pagina chamada pages e vamos fazer o nosso header.
nosso styles pro app fica assim:
import { styled } from '..';

export const Container = styled('div', {
display: 'flex',
flexDirection: 'column',
alignItens: 'flex-start',
justifyContent: 'center',
minHeight: '100vh',

})

export const Header = styled('header', {
padding: '2rem 0',
width: '100%',
maxWidth: 1180,
margin: '0 auto',
})
e a pagina _app.tsx fica assim:
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from '../assets/logo.svg'
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";

export default function App({ Component, pageProps }:AppProps) {  
  globalStyles()
  return(
<Container>
<Header>
  <Image src={logo.src} alt="" />
</Header>
<Component {...pageProps} />
</Container>

  ) 
}

isso serviu para visualizar melhor que o app é carregado em todas as paginas. acho que poderiamos criar componentes em outra pasta fora dos pages e colocar esses componentes no app e não ter que criar o header no app.

a image fica dando erro. então vamos ver como fazer a Image no next.
as imagens que usamos geralmente estão em tamanhos diferentes em layouts e quando usamos elas em frontend para a web a gente precisa que elas sejam carregadas com muita performace e para isso a gente tem que observar varios pontos. por exemplo se a nossa imagem tem 1000 px mas vamos usar ela com 400px não tem porque a gente usar uma imagem de 1000 se vamos so usar 400 então o next otimiza de forma automatizada todas as imagens de nossa aplicação então ele vai criar uma versão aotomatica dessa iagem com so 400 px e ele vai carregar essa e não a de mil. ele consegue fazer imagens responsivas, se ele estiver em mobile vai carregar uma imagem menor etc. 
usando o next Image é sempre legal presetar uma largura e altura, essa largura e altura não é definitiva, mas a gente pode colocar como se for a maior possivel. então na  img a gente coloca width e heigth como sendo os valores maiores que a gente deseja.

# largura modular
imagina que a gente quer que o nossa box fique com uma largura fixa e mais toda a margem da direita, dessa forma tendo sempre um espaço vazio a esquerda. porem caso apessoa de um woom out o espaço ate a margem direita vai crecer, sendo assim a box tambem cresce e mantem um espaço proporcional vazio a esquerda. como fazer isso?
pra fazer isso  gente precisa fazer um calculo no css.
vamos pegar a largura total da tela (100vw) - o tamanho fixo da box (vamos dizer 1180) o resultado disso é as duas margens, então temos que dividir por dois para ter apenas uma.como a divisão executa antes nos vamos escrever isso assim 
o total do tamanho da box que queremos é 1180 + ((100vw-1180) / 2) 
assim temos o tamanho da box + uma das margens.
o css fica assim:
width: '100%',
maxWidth: 'calc(100vw - (100vw - 1180px)/2)'
agora para aplicar a margem no lado que a gente quer:
a gente coloca margin (left ou rigth ) : auto

a gente quer fazer o footer sair um pouco da tela. vamos usar essa propriedade:
    transform: 'translateY(110%)',
        opacity: 0,
        translate Y quer dizer no eixo Y 110 quer dizer que é mais do que o tama,nho total da tela.
        juntando isso com esse hover;
         '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
        quer dizer que o footer fica armazenado fora da tela e quando a gente faz o hover nele ele vai aparecer para dentro da tela.

# carrossel
para criar o carrossel vamos usar uma biblioteca chamada keen-slider.
a gente pode tamber fazer com o radix no futuro.
vamos instalar o npm i keen-slider
e ai na pagina que vamos usar vamos importar elementos do keenslider/react e vamos tambem importar um css que vem dessa biblioteca. vai ficar asim as importações

import { useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

nos vamos entéao fazer uma const para pegar de dentro desse useKeenSlider os slides e q gente quer 3 por pagina visivel ao mesmo tempo então vamos colocar slides: {
  perView: 3,
}
 ele retorna um array então vamos desestruturar esse array e pegar a sliderRef (ref é uma referencia a um elemento da DOM). 
 fica assim:
 const [SliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    }
  })

  agora vamos achar a div que esta por volta dos meus slides que no caso é o home container (cada product é um slide.)
  e passamos para ela ref={sliderRef}

  isso da acesso ao keen-slider para modificar essa div que a gente flageou com o ref. basicamente é isso.
  agora precisamos passar classes para a estilização funcionar. a classe do container vai ser keen-slider fica assim:
  <HomeContainer ref={SliderRef} className="keen-slider">

  agora cada produto vai ter a classe keen-slider__slide
  so com isso o slide ja deve funcionar. agora temos que personaliza-lo.
  porem o keen-slider não entende o gap. então vamos tirar o gap do homeContainer o padding nos produtos tambem faz o mesmo efeito então tambem vamos tirar eles.

  mas ai no prorpio slides onde tem o perView do keen slides tem uma opção chamada spacing. ai nos vamos fazer o espaçamento por ela.
  o spacing vai ser por px, então no lugar de 3 rem temos que colocar 48 e não vamos especificar o px.
  fica assim:
    const [SliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  


