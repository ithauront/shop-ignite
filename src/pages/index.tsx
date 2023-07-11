import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
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
