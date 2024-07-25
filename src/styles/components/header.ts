import { styled } from "..";

export const HeaderContainer = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

 
    
    'button': {
        border: 'none',
        width: '3rem',
        height: '3rem',
    
        padding: '0.75rem',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    
        background: `$gray800`,
        color: `$gray500`,
    
     
    },
    '.cartIconWrapper': {
        position: 'relative',
        display: 'inline-block'
      },
      
      '.cartItemCount': {
        position: 'absolute',
        top: '-10px', 
        right: '-10px', 
        background: '$green300',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px',
      }
    })