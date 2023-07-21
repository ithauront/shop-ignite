import { styled } from '..';

export const Container = styled('div', {

display: 'flex',
flexDirection: 'column',
alignItems: 'flex-start',
justifyContent: 'center',
minHeight: '100vh',
position: 'relative'


  
})


export const Header = styled('header', {
padding: '2rem 0',
width: '100%',
maxWidth: 1180,
margin: '0 auto',

display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',

'div': {
    
    width: '3rem',
    height: '3rem',

    padding: '0.75rem',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: `$gray800`,
    color: `$gray500`

}
})