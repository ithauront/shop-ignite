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

  a pag ficou assim:
  import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css';

import camiseta1 from '../assets/camisas/Camisa-Maratona 1.png'
import camiseta2 from '../assets/camisas/IgniteLab-T-shirt 2.png'
import camiseta3 from '../assets/camisas/Igniter-abord-2-t-shirt 1.png'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  console.log("Slider Ref:", sliderRef);

  return (
   <HomeContainer ref={sliderRef} className="keen-slider">
   <Product className="keen-slider__slide">
    <Image src={camiseta1} alt='camiseta1'  width={520} height={480}/>

    <footer>
      <strong>Camiseta X</strong>
      <span>R$ 79,90</span>
    </footer>
   </Product>
   <Product className="keen-slider__slide">
    <Image src={camiseta2} alt='camiseta1' width={520} height={480} />
    <footer>
      <strong>Camiseta Y</strong>
      <span>R$ 79,90</span>
    </footer>
   </Product>
   <Product className="keen-slider__slide">
    <Image src={camiseta3} alt='camiseta1'  width={520} height={480}/>
    <footer>
      <strong>Camiseta Z</strong>
      <span>R$ 79,90</span>
    </footer>
   </Product>
   <Product className="kenn-slider__slide">
    <Image src={camiseta3} alt='camiseta1'  width={520} height={480}/>
    <footer>
      <strong>Camiseta W</strong>
      <span>R$ 79,90</span>
    </footer>
    </Product>
   </HomeContainer>
  )
}


# stripe

nos vamos criar uma conta no stripe para fazer como se fosse nossa loja. 
apos isso vamos entrar la no nosso longin e criar alguns produtos. ,no caso as camisas.
cadastramos os produtos na aba ^rpdutos
com os pordutos cadastrados vamos listar eles na nossa apmicação. do lado temos o desenvolvedores. e clicando la temos o painel de desenvolvedores do stripes onde tem as chaves api.
nas chaves api vamos pegar a chave publica.
e dentro do projeto vamos salvar elas na variavel ambiente.
# variaveis ambiente são variaveis que o valor dela muda de acordo com o ambiente de nossa aplicação. então em desenvolvimento o valor dela é um, em produção é outro. e ela tambem não vai pro github. ela é secreta.
no next para fazer isso a gente cria um arquivo nz raiw chamado .env.local
e dentro desse arquivo a gente cria um PUBLIC_KEY = o valor 
e pego tambem o valor da secretkey e faço igual é aconselhavel colocar um comentario pra dizer de onde elas vem
FICOU ASSIM/
#stripe
STRIPE_PUBLIC_KEY=p aqui vai a chave copiada
STRIPE_SECRET_KEY= aqui vai a chaver copiada

# data fetch no next
os indexadores veem o site com o js desabilitado ou sem esperar o tempo de resposta. entao eles nao vao ver o que vem da api porque isso demora pra chegar. o next vai carregar a pagina com o css e tudo no servidor node, porem o q roda no client side como as bibliotecas, o use effect e etc não vai aparecer porem existe uma forma de falar para o next que queremos que essa chamada da api rode no servidor node tambem.
antes de tudo o arquivo precisa estar na pasta pages, em outra pasta a gente não consegue fazer isso.
vamos fazer esse setTimeout para simular uma chamada de api:
  const [list, setList]= useState<number[]>([])
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  useEffect(() => {
    setTimeout(()=>{
      setList([1,2,3])
    }, 2000)
  }, [])

  para mandar ele rodar tambem no servidor ode o que a gente tem que fazer é o seguinte:
  a gente pode exportar no fim do arquivo uma função chamada getServerSideProps ou seja pegar as propriedades que vem do serverside o servidor node e não do clientside que é o front end
  essa const vai ser uma função que vai devolver de dentro dela propriedades como por exemplo uma lista com 1 2 e3 e a propriedade pode ser recebida pelo parametro da função home. então se eu mostrar em tela usando json.stringfy essa lista ela vai aparecer.
  a const fica assim
  
export const getServerSideProps= () => {
  return {
    props: {
      list: [1,2,3]
    }
  }
}
assim fica a chamada da função home:
export default function Home(props) {

  e assim fica a chamaa pra lista:
  <pre>{JSON.stringify(props.list)}</pre>

  assim ja aparece a lista mesmo com o js desabilitado.
  
  IMPORTANTE
  Com o codigo do useEffect o que acontece é que a pagina roda, e depois do timeout a lsita aparece.
  para simular essa espera a gente pode fazer um await new promisse de 2 segundos do retorn da getServerSideProps
  porem assim a pagina por completo demora dois segundos para ser exibida em tela e não apenas a parte da lista. o que quer dizer que ele espera a props para renderizar a pagina inteira.
  ou seja o server não devolve nada pro browser até que tudo que a gente tenha colocado na função getserverside seja executado.
  diferente do useEffect que não para a renderização do resto da tela
  com a getSideSever por exemplo não vamos poder ter um load. porque a pagina nem vai ser exibida em tela.
  se a gente colocar um console.log na funnção getServerSide ele nõa aparece no console do navegador. ele vai aparecer no server que esta rodando no terminal.
  isso acontece porque esse codigo que esta no serverSide ele so executa no servidor node (que nesse caso é nosso terminal) ele nem chega para o navegador, qs unicas coisas que vao para o navegador são as props.

* chamada api no getSideServer
como as coisas que estão no getsideserver fazem toda a pagina esperar a sua resposta. não é bom a gente fazer toda chamada de api por ela, se não a pagina vai demorar para renderizar. o que é ruim para o usuario
então na maioria das vezes ainda vamos preferir fazer as chamadas para api do modelo tradicional com useEffect
so vamos usar o getServerSidePorps para fazer chamadas de coisas que a gente necessariamente precisa que estejam disponiveis assim que a pagina for exibia
ou seja apenas informações cruxiais para estarem em tela que serão usadas por indexadores, bot e coisas do tipo
# importante
é importante tambem entender que o sideserverProps vai rodar coisas no server node, ou seja vai ser invisivel para o usuario final. então é uma boa coisa para quando precisamos fazer chamadas escondidas do nosso usuario. o que é o caso aqui porque temos chaves secretas, 
então para usar a chave secreta para buscar os produtos o getServerSideProps é o melhor lugar para colocar codigo sensivel (autentificação, banco de dados etc)
vamos instalar a biblioteca stripe
npm i stripe
vamos criar uma pasta lib na src dentro dela um arquivo stripe.ts
o arquivo stripe esta assim
import Stripe from 'stripe'

export const stripe = new Stripe({

}) 

precisamos agora pegar a privateKey e para isso vamos pegar um process.env.Stipe_secretKey fica assim
fica assim
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {

}) 
agora o segundo parametro é o objeto que vamos pegar
apiVersion: 'a versão que estiver' depois vamos passar o appInfo: {
  name: o nome de nosso app
}
passamos o a appInfo pq assim se faz um log la e podemos ter controle de quem fez qual requisição.
a pagina fica assim
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
apiVersion: '2022-11-15',
appInfo: {
    name: 'ingite shop'
}
}) 

agora voltamos para a nossa pagina index e vamos la pra serverSideProps
e fazemos uma const response = await stripe.products.list()
vamos aprovietar e tipar a getServerSide props com a tipagem GetServerSideProps que vem do next.
como nos não vamos querer todos os dados que vem dessa lista agente pode fazer uma transformação dos dados. riando uma nova lista de produtos. fazendo um mapeamento de cada produto e retornando um novo objeto so com o que a gente quer
a unica coisa um pouco diferente é o preço que não vem na listagem, mas o stripe tem um conceito chamado expanding responses ue é basicamente expandir um relacionamento com base em uma resposta.
o default price é um relacionamento do preço com o produto, mas se a gente fizer um expand neme ele vai retornar o objeto do preço do produto.
então no list a gente tem que passar um objeto e dentro dele passar o expand: ['data.default_price'] agora com isso a gente consegue pegar a informação do preço.
para pegar essa info dele a gente vai fazer product.default_price (mesmo passando o mouse em cima ele vai dizer que é o id do preço porque ele não entende que fizemos o expand) para isso não acontecer a gente vai dar um const price = reponse.product.default_price as Stripe.price assim a gente ja coloca a tipagem que ele vai entender. assim podemos usar nosso price : price.unit_amount nesse objeto. isso vai vir em centavos. para evitar problemas de numeros float e etc. entao 
# dica
sempre que formos salvar preço em banco de dados a gente multiplica por 100 para ele ir pra la em centavos. 
e quando for usar divide por 100
agora colocamos os products na nossas props de etorno o codigo completo fica assim.
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      price: price.unit_amount / 100, 
    }
  })
  return {
    props: {
    products
    }
  }
}

agora na nossa função home vamos colocar desestruturar e pegar os products de dentro das props

para a image a gente tem que especificar para qual dominio vai funcionar. então temos quie ir no nextconfig. dentro vamos criar uma opção chjamada images: {
  domains: [ e qaui a gente coloca os dominios no nosso caso é files.stripe.com]
}
o next config fica assim:
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com'
    ]
  }
}

module.exports = nextConfig

e nossa pagina home fica assim:
import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css';

import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface HomeProps{
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({products}: HomeProps) {
 
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })


  return (
   
   <HomeContainer ref={sliderRef} className="keen-slider">
     <pre>{JSON.stringify(products)}</pre>
 { products.map(product => {
  return(
    <Product key={product.id} className="keen-slider__slide">
    <Image src={product.imageUrl} alt='camiseta'  width={520} height={480}/>

    <footer>
      <strong>{product.name}</strong>
      <span>R$ {product.price}</span>
    </footer>
   </Product>
  )
   
 })}
   
   </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      price: price.unit_amount / 100, 
    }
  })
  return {
    props: {
    products
    }
  }
}

a imagem vai demorar um pouco mais de carregar porque ela vai da api. uma forma de mudar isso é pegar uma biblioteca de blur blur to hash instalar e usar. assim ela pode gerar uma imagem desfocada da imagem que queremos carregar ue carrega muito mais rapido e vai focalizando quando estamos recebendo a imagem.

# SSG

o carregamento de coisas da api gasta dados, memoria e tudo mais alem de deixar a aplicação pesada.
nesse tipo de pagina que é um e-commerce vai raramente mudar os dados durante o dia. então a gente pode fazer um cash para salvar a pagina uma vez e depois manter isso salvo durante talvez o temoo s de 24h para que os proximos acessos ejam mais rapidos sem precisar buscar do backend.
para isso vamos usar aquela vantagem do next que é carregar a pagina em um cach paralelo. o SSG staticSiteGenerator
para fazer isso é muito facil. a gente so precisa mudar o GetServerProps para
getStaticProps tanto na const quanto nas props que a gente fez. vai ficar assim:
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100, 
    }
  })
  return {
    props: {
    products
    }
  }
}

se a gente der F5 nada vai mudar porque em desenvolvimento o next trata a getStatic exatamente como a getServerSide. isso para não criar cash e a gente modificar algo não ver o resultado e ficar sem entender o porque, ou seja para ecvitar erros.
para testar isso a gente tem que ou colocar o projeto em producão ou executar ele como se ele estivesse em produção.
porem ao mudar para static nos não temos mais açoes as respostas por exemplo nos props. isso porque o metodo não roda a cada requisição feita à pagina, ele so vai rodar no momentoq ueo next criar uma versão de cash. o primeiro momento que isso acontece é quando fazemos o build da aplicação. ele procura por todas as paginas que precisam ser estaticas e constroi elas.
se a gente rodar um npm run build isso acontece e ele vai mostrar uma lista dizendo que o que tem a bolinha branca esta gerada em SSG com o que foi gerado la. as que não tem a bolinha tambem foram geradas mas sem o json. 
se apos a gente der um npm run start ele vai abrir a pagina que foi construida, muito mais rapdio do que era antes. porem ao fazer isso o build vai ficar esse até a gente mandar fazer outro. 
para evitar isso a gente pode colocar no retorno do getStatic uma propriedade chamada revalidate.
# revalidate
o revalidate é um numero em segundos que vai ser o tempo em que queremos que sej recriada. ou seja ela vai ser gerada no momento da build e a cada  x segundos uma nova é criada.
a gente pode colocar algo como 60 * 60 * 2 para ele revalidar a cada 2 horas, ou algum calculo que a gente queira.
o unico problema de usar o static é que a gente não tem acesso aos contextos das requisições como as informações do usuario logado, coockies e etc.
por exemplo se eu precisar de informações que são dinamicas ou seja que precisam de um id de usuario para renderzar a coisa correta, por exempl o perfil do usuario em um instagram. ai eu não posso mais usar o estatico, se não todos os usuarios iriam ver a mesma coisa.

# preço
vamos formatar o preço dentro do static para não executar ele toda vez que a gente rodar o projeto como é o caso que esta acontecendo com ele estando formadado dentro do span.
como não é uma coisa como uma data (que depende da data atual) e não podemos colocar dentro do static se néao ele vai errar a data. no caso do preço que não vai mudar a gente pode formatar dentro.
vamos colocar o new Intl numberformat ptbr e o price. ficou assim
return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BLR',
              }).format(price.unit_amount / 100), 
    }
  })

  # navegação no next
  riamos o product como uma ancora, ou seja uma tag a
  por causa disso podemos adicionar um href
  e isso vai direcionar o usuario ao clicar no produto para uma outra pagina.
  agora pensa o seguinte: nos temos o id do produto. e temos a pagina especifica para o id do produto, que a gente criou em pages com o [id]. então no href a gente podia colocar algo como href={'/product/${product.id}'}
o texto ficou em azul porque colocamos um href no product temos aque voltar no styles e no strong do footer colocar a color gray100.
com isso a navegação vai fucnionar.
porem ao fazer a nagevação assim o nosso navbegador vai carregar toda a aplicação do zero de novo ao clicar para navegar. ou seja toda a base da aplicação que não muda de uma pagina para outra vai ser recarregada do zero.
para evitar isso o next nos oferece o componente Link que podemos importar de dentro do pacote next/link
e a gente usa esse componente por volta da nossa ancora, ou seja o product vai ficar dentro do link. e como o link que vai aparecer no map é ele que vai recerber a key e o href.
agora ao mudar de pagina tudo que ja foi carregado na home não vai mais carregar.
ou seja apesar do serverSideRender e do static o next não deixa de ser um spa para a maioria dos caso o que significa que quando fazemos uma navegação de uma pagina para outra utilizando um link o next se comporta como uma aplicação react tradicional.s
  
  # construção da pagina de produco
  dentro da pasta styles/pages vamos criar um arquivo chamado product.ts
  la vamos criar uma container um image container e um product ditails 

  essa é a estrutura basica da pagina de product antes dela ser modular:
  import { useRouter } from "next/router"
import { ImageContainer, ProductContainer } from "../../styles/pages/product"
import Image from "next/image"

export default function Products() {
    const {query} = useRouter()
    return(
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductContainer>
                <h1>Camiseta X</h1>
                <span>R$ 10,00</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, harum! Labore suscipit placeat dolorem similique facere libero neque quidem non officiis! Velit eius, molestiae eveniet iusto nihil aperiam eum doloribus.</p>
                <button>Comprar agora</button>
            </ProductContainer>
        </ProductContainer>
    )
}

agora vamos fazer os estilos dessa pagina em cada tag dessa que criamos: não vou copiar os estilos aqui.
# receber ifrmações na product
vamos pegar estaticamente igual fizemos na home. usando a getStaticPrps
porem a pagina do produto recebe parametros do id do produto em questão enquanto a home não faz isso
então se a gente desetruturar o argumento da função async nos vemos que podemos pegar um params e com esse params a gente pode acessar o id que vem atravez do nome do arquivo. fica assim
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productId = params.id;
    agora com o productId nos usamos o id que vem atravez da url.
    e agora vamos usar o retrive do stripe para pegar esse producto especifico pelo id.
    fica assim:
       const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    }) 

    adicionando o expand para o preco e como desas veznão é uma lista não precisamos usar o data.
    so que isso da um erro no productId do retrive pq o retrive espera uma string e nosso productId pode ser uma tring ou um array de string.
    para evitar isso temos dois metodos, podemos forçar uma conversão para string usando o String[params.id]
    ou podemos usar os getStaticProps tipagem que tem alguns genericos o primeiro é sobre o as nossas props do retorno, como não queremos tipar ele vamos botar como any. o segundo generico vai ser o formato do objeto de parms então se abrimos um objeto {id:string} ou seja dizemos que o param.id é uma string ele vira uma string e o erro passa. vamos fazer assim e fica dessa forma
    export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
   agora podemos copiar o codigo do retorno da home e colocar o objeto de retonro dentro das props. fica assim
   export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })
    const price = product.default_price as Stripe.Price
      return {
        props: {
         product:   {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                        }).format(price.unit_amount / 100), 
                decription: product.description
              }
        },
        revalidate: 60* 60 * 1 // apesar do 1 não mudar o calculo ele é interessante para a visualização rapida de quanto tempo esta se passando, se quisermos aumentar passamos ele para 2, 3 etc.
    }
}

agora ja temos acesso a id nome image price e adicionamos a descrição.
agora pegamos esses dados atravez das props do componente da função geral da pagina. criamos uma interface dizendo que as props recebem um objeto chamado product e colocamos todas as caracteristicas desse objeto.
a pagina fica assim:
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"
import { GetStaticProps } from "next"

import { stripe } from "../../lib/stripe"
import Stripe from "stripe"

interface ProductProps {
    product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    }
}

export default function Products({product}: ProductProps) {
    const {query} = useRouter()
    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })
    const price = product.default_price as Stripe.Price
      return {
        props: {
         product:   {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                        }).format(price.unit_amount / 100), 
                description: product.description,
              }
        },
        revalidate: 60* 60 * 1 // apesar do 1 não mudar o calculo ele é interessante para a visualização rapida de quanto tempo esta se passando, se quisermos aumentar passamos ele para 2, 3 etc.
    }
}

se rodarmos isso vai dar erro dizendo que a getStaticPath é obrigatorio para paginas ssg dinamicas e a nossa esta faltando isso.
a nossa pagina é dinamia porque ela tem como parametro o id do produto. essa pagina muda de endereço com base nesse parametro, por isso ela é dinamica.
o problema qcontece porque imagina que o codigo todo vai rodar quando fizermos o build para poder ter essas paginas estaticas. mas a pagina do produto precisa do id de algum produto para ser criada. mas como ela vai achar esse id se não foi clicado em nenhu produto? por isso temos um erro, ela não acha o parametro necessario para puxar as coisas corretas da api.
por isso quando temos paginas estaticas que precisam de parametros nos precisamos criar uma e exportar uma const getStaticPath que possui tambem sua tipagem especifica vinda do next. que é bvasicamente um metodo que devolve esses ids
esse metodo funciona da seguinte forma, ele precisa retornar um objeto e dentro desse objeto um paths que é  um array
esse array precisa ter varios objetos dentro dele. e cada objeto desses retorna basicamenteos parametros que nos queremos.
fica assim (depois falamos do fallback)
export const getStaticPaths: GetStaticPaths = async() => {
    return {
        paths: [
            {params: {id: "prod_OFcT8N1YUwVN0t"}}
        ],
        fallback: false
    }
}
temos que fazer um objeto para cada produto.
porem imagina que nosso comercio tem 20 mil produtos, vamos ter que fazer o path para 20mil coisas? não nos temos como falar para esse metodo que se houverem produtos que não especificamos nos podemos dar um compoetamento para o site. veremos isso em breve.
a navegação nao estava funcionando porque no index eu estava usando o href com aspas simples mas eu fazia uma concatenação com $ então na verdade eu teria que usar as template strings ` ` apos trocar funcionou.

mas agora vamos fazer de uma forma que não precise escrever o caminho estatico de todos os produtos.
quando passamos parametros no paths o que queremos passar para o next é que são esses os parametros que ele vai executar quando ele rodar o getStaticProps.
então o que fazer quando temos uma quantidade grande de produtos? 
se o paths é tudo que vai ser criado no momento da build, ou seja ele vai odar o staticProps uma vez para cada param, temos que manter isso enxuto porque se não a build vaificar pesadissima.
então quando temos muitos produtos temos duas opções,
1) a gente busca os produtos mais vendidos ou mais acessados, e fazemos os paths deles... nesse caso para dos os outros produtos a gente encontraria o erro 404 de not found, e por isso temos a opção fallback.
* fallback
quando passamos fallback false - ao acessar uma pagina de um produto que não passamos no path ele vai dar o erro 404.
com o fallback true o next vai pegar o id que a gente passou para os paths para tentar gerar uma pagina estatica similar a versão que existe, o next vai pega o html de nossa pagina e vai tentar carregar os dados do produto por baixo dos panos. ou seja ele vai dar undefined para as coisas do produto, ele vai executar o html e quando ele terminar de carregar tudo ele vai la na api e busca as coisas do produto especifico. por isso nos teriamos que colocar amgum estado de load nesses elementos modulares.
para detectar que esta acontecendo um load o next permite para a gente obter a informação isFallback atravez do hook useRouter() 
const { isFallback } = useRouter()

como usar isso vamos fazer um quando o isFalback for true vamos retornar um loading. e apenas isso vai renderizar em tela um loading para todos as informações modulares que ainda não foram carregadas.
  const { isFallback } = useRouter()
    if (isFallback) {
        return <p>Loading...</p>
        }

        não é recomendado mas caro a gente não queira gerar esse estado de load a gente tem a opção fallback blocking que faz toda a tela ficar em branco até ter algo para mostrar. mas para o usuario final é uma experiencia pior.
  é bom saber que com o falback true nos podemos colocar nada no array de paths, assim as paginas estaticas so serão geradas o html ate as respostas da api chegr.
  
  # prefetch
  o next faz um pre fetch de links de forma automatizada (é possivel que ele não faça em desenvolvimento mas faz em produção.)
  quando rodamos a build de produção e olharmos na aba network o next carrega a home e faz uma chamada para cada produto que aparece em tela. e quando passamos o mouse por cima dele o next faz logo mais uma chamada para essa rota, pra ja ir carregando caso voce clique ja trazendo a resposta da api aos produtos que aparecem em tela.
  ou eja para o next cada vez qua e gente tiver um link em tela, ele faz uma intersection observer (uma api do navegador que permite observar quando elementos são aparentes em tela.), ou seja ele deduz que voce pode clicar e ja vai tentando carregar as coisas (faz prefetch). mesmo que voce não passe essa pagina no getStaticPaths.
  isso é bom porque acelera a pagina e da boa experiencia para o usuario. mas é ruim porque s temos muito links em tela eel vai carregar muita coisa e ficar carregadno toda hora que o mouse passa.
  para controlar isso a gente tem que no link temos que usar a propriedade prefetch que por padrão é true, mas podemos mudar para false
fica assim:
  <Link href={`/product/${product.id}`} key={product.id} prefetch={false} >

  assim o prefetch vai funcionar somente no hover e para de funcionar automaticamente ao carregar, so disso ja elimina varias carregasdas.
  essa feature do prefecth é muito boa mas temos que tomar cuidado caso a gente tenha muios links para colocar po false para a aplicação não ficar pesada

  # route no next
  se o next nos cria um servidor next para carregar em backend as informações do frontend nos poderiamos usar ele para criar rotas para fazer algo queum servidor backend faria, como autenticação, lidar com banco de dados, envio de email.
  e sim podemos ter isso no next, apesar de não ser o mais aconslhado para todos projetos, para muitos projetos e alguns tipos de funcionalidade, faz sentido a gente usar isso. ou seja ter rotas backend dentro do nosso frontend.
  isso se da em casos prnciapalmente  em casos que não temos uma api extarna ai a gente cria rotas diretamente no servidor node
  ou quando temos funcionalidade que queremos incluir que precise executar pelo lado do servidor mas ela é expecifica do app wed de nossa aplicação porque se a gente colocar ela no backend ela atrapalharia outros clientes como mobile, ou algo assim, são coisas especificas do ambiente que iremos rodar a aplicação como autentificação com google. então temos que ter controle de em qual plataforma o usuario esta acessando. e assim colocamos no serverside.
  na pratica para criar rotas

  # rotas
  na pasta pages a gente cria uma pasta chamada api
  e nesta pasta colocamos um arquivo com o nome que quisermos mas tem que ser ts e não tsx porque dentro dessas rotas não vai codigo tsx
  e de la a gente exporta uma funcção  que recebe req e res ou seja requisição e resposta assim como qualquer express.
  e retorna uma resposta assim:

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.json({message: "hello world"})
}
agora podemos acessar ele usando o /api/hello
e todo codigo que roda nele é um codigo que roda em serverside enão não precisamos nos preocuar tanto com dados sensiveis comoa cesso a banco e etc.
é ideal a gente fazer a tipagem do req e do res por isso colocamos o NextApiRequest e response

 podemos pensar porque fazer isso se a gente consegue executar funções pelo serverSide usadno o getStaticProps e assim podemos manipular informações sensiveis como fizemos com as secretKey, pra que precisamos da rota?
 * porque o getServerSide so vai exectar as coisas no load, ou seja quando carregar a pagina pela primeira vez. agora com a rota a gente pode executar referente a ção de um usuario como um click de butão.

 # checkout
 o stripe tem o proprio checkout dele então nos vamos redirecionar a pessoa para o proprio checkout do stripe para ela finalizar o pagamento la
 e para isso vamos usar uma api route porque essa ação não pode ser criada client side ela tem que ser criada a partir do side server ^porque precisamos usar noss secretkey
 e esse checkout vem de uma ação do usuario ele precisa clicar no butão e por isso vamos usar uma api.
 para criar isso vamos transformar ela em uma função assincrona e pegar o await la da stripe uma propriedade chamada checkout e dela a sessions e create() 
 dentro do crate vamos passar um objeto com o que queremos que tenha, priemeiro vamos colocar o mode; e no moute tem alguns nos vamos escolher o payment pq vai ser um so pagament.
 o outromodo obrigatorio que temos que colocar é o line itens. que vai dar informações sobre qual produto o usuario esta comprando.e ai a gente tem duas opções podemos passar todo o objeto do produto com nome descrição etc do zero. isso é valido quando não cadastramos o produto dentro do stripe, porque podemos criar checkout de algo que não esta cadastrado no stripe.
 ou podemos passar apenas a informação price que é igual ao id do preço que é o produto tem um relacionamento diferente, podemos ter varios preços para o mesmo produto, por por exemplo promoção. para o checkout entender que o preço especifico esta no carrinho a gente precisa passar o price id. e ai vamos criar a const dessa priceID para especificar ela. e a outra info que precisamos colocar no line itens é a quantidade.
 com isso ainda da erro porque ele diz que ainda falta duas infos obrigatorias a cancel url e a success url. nos passamos elas em branco. fica assim:
 import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const priceID = ''
  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: '',
    success_url: '',
    mode: "payment",
    line_items: [
        {
            price: priceID,
            quantity: 1,
        }
    ],  
  })
}

a cancel e sucees são as url de onde iremos redirecionar o usuario caso ele compre com sucesso ou cancele a compra.
nos vamos criar o endereço no env.local para que isso não seja mostrado para o cliente. vaos la fazer um comentario para dizer o que é e vamos chamar de NEXT_URL e colocar o endereço que estamos o localhost mas claro que na aplicação real colocariamos outro endereço.
fica assim:
# APP
NEXT_URL=https://localhost:3000

voltamos na rota e criamos nossas variaveis.
fica assim
const success_url = `${process.env.NEXT_URL}/success`
    const cancel_url = `${process.env.NEXT_URL}/success`
    o endereço co cancel e succes esta igual apenas por que isso é um teste e estamos mandando ambos para home. mas na real serriam endereços diferentes.
    e nas prorpiedades cancel e succes a gente passa eles.
    fica assim:
    import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const priceID = ''
    const success_url = `${process.env.NEXT_URL}/success`
    const cancel_url = `${process.env.NEXT_URL}/success`
  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: success_url,
    success_url: cancel_url,
    mode: "payment",
    line_items: [
        {
            price: priceID,
            quantity: 1,
        }
    ],  
  })
}

agora vamos fazer a priceID
atualemente no nosso product na rota id nos nao temos o priceID temos apenas o price ou o id do produto. mas podemos obter o priceid. na pagina [id] ao carregar os dados do produto nos carregamos tambem o defaultprice nessa linha:
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
o defaultprice é o preço setado como padrão. então no retorno de product nos podemos retornar tambemessa informação, criamos o defaultPriceId: product.default_price.id. ou melnhor como ja tinhamos setado o price para ser o product.default_price nos vamos setar price.id. as props ficam assim com o priceId no fim:
const price = product.default_price as Stripe.Price
      return {
        props: {
         product:   {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                        }).format(price.unit_amount / 100), 
                description: product.description,
                defaultPriceId: price.id,
              }

atualizamos isso na interface como sendo uma string e mandamos ele
so mudar isso queja vai fucnionar:
interface ProductProps {
    product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
    }

    agora para testar vamos fazer uma função handleBuyProduct e nela vamos dar so um console.log(defaultPriceID) e vamos chamar essa função ao clcar no butão de comprar.
    vamos rodar o programa copiar o que o console diz ser a priceId apos apertarmos o butão e colar la na rota no priceID. 
    mudamos o nome do arquivo de hello para checkout. no fim do checkout nos vamos dar um retorno res.status(201) ai ele vai dar o status 201 de ter criado e um json({
      checkout_URL: que vem de checkoutSession.url) para ele ir para a pagina checkot para finalizat a compra dele; essa url é para onde iremos redirecionar ele. fica assim:
       return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}


agora com isso salvo se a gente chamar a rota /api/checkout ele vai retornar uma url para a gente. apos se comunicar com api. r ao clicar nesse endereço ele ja entrega para a gente uma pagina de pagamento toda certinha com o item correto descrição preço e tudo.

# dica
o stripe tem cartoes testes que a gente pode usar para testar o metodo de pagamento de forma falsa apenas para ver se funciona. temos que pesquisar stripecard test. ele tem tanto que da certo quanto que da errado.

# handlebuyproduct
vamos melhorar a função handle buy product. transformar ela em async. e colocar o try catch porque isso é aconselhavel quando tratamos de coisas que vem de api. no catch vamos colocar um alert falha ao redirecionar
atch (err) {
        //conectar isso a uma feramenta de observabilidade como (Datadog / sentry)
        alert('falha ao redirecionar ao checkout')
      } 

      o comentario é so para o que seria legal de fazer.

agora para o try vamos instalar o axios. para comunicarmos o cliente a rota api do next da mesma forma que conectamos com qualquer rota node. como queremos criar um checkout a melhor opção é o axios.post.
nos não precisamos criar um lib do axios para setar a baseurl. isso porque a api esta rodando no mesmo endereço que o frontend ou seja ambos estão rodando no host:3000.. nesse caso basta colocar o pathh da rota do next tirando a parte do dominio (localhost:3000) que o axios vai entender. ou seja fica post('/api/checkout') e no segundo argumento vamos passar os parametros que queremos enviar.
vamos pegar a checkoutUrl de dentro do response.data const 
{checkoutUrl} = reponse.data
 e vamos redirecionar o usuario para ela.
 para redirecionar o usuario por dentro de uma função tem duas formas:
 1) se for para uma aplicação externa (nosso caso que vamos mandar para a stripe) usamos o window.location.href = checkoutUrl
 
 2) se for para uma rota interna vamos far um const router = useRouter (que vem do next) e depois damos o router.push('rota que queremos') 
 como vamos usar o primeiro nossafunção completa fica assim:

    async function handleBuyProduct () {
      try {
        const reponse = await axios.post('/api/checkout', {
            priceID: product.defaultPriceId
        })

        const {checkoutUrl} = reponse.data
        window.location.href = checkoutUrl
      } catch (err) {
        //conectar isso a uma feramenta de observabilidade como (Datadog / sentry)
        alert('falha ao redirecionar ao checkout')
      }     
    }  

como isso demora um pouco a gente pode criar um estado chamado isCreatingCheckoutSession e setIsCreatingC... e vamos colocar esse estado como boolean.
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

e colocamos isso no inicio do try como true e no cacth como false. 
* importante nos não precisamos tirar o estado do true caso de tudo certo porque o usuario sera redirecionado para outra pagina de qualquer forma (porem se a gente quisesse mudar era so colocar um finaly(set...(true)) no final de turo (depois de fechar o catch))
agora vamos passar um disable para o butão sempre que essa opção estiver como true o botão fica assim
<button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
e vamos fazer a estilização de opacity e cursos para o cao do disabled. (não coi volovar aqui.)




