import { styled } from "..";

export const ShoppingCartContainer = styled('div', {
    width: '30rem',
    minHeight: '100vh',
    background: `$gray800`,
    padding: '1.5rem',
    gap:'1.5rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    position:'fixed',
    top:'0',
    right:'0',
    zIndex:'100',
    overflowY:'auto',

 
    'main': {
      
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '1.5rem',
        marginTop: '1rem',
        width: '24rem',

        '.close-button' : {
            marginLeft: '25rem',
            border: 'none',
            right: '1.5rem',
            width: '1.5rem',
            height: '1.5rem',
    
            cursor: 'pointer',
    
            background: 'transparent',
            color: `$gray500`,
            fontSize: `$lg`,
    
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
    
        },
        '.title': {
            marginLeft: '1.5rem',
            fontSize: `$xl`,
            fontWeight: 'bolder',
        },
        '.product': {
            display: 'flex',
            flexDirection: 'row',
            gap: '1.25rem',

            width: '24rem',
       
            '.imageContainer':{
            width: '6.375rem',
            height: '5.81rem'
        },
           
            '.productInfo': {
            
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '0.5rem',
               
                height: '5.875rem',
        
                'p': {
                    fontSize: `$md`,
                    fontwheight: 'regular',
                    color: `$gray300`,
                },
        
                'strong': {
                    fontSize: `$md`,
                    fontwheight: 'bold',
                    color: `$gray100`,
                },
        
                'button': {
                cursor: 'pointer',
                border: 'none',
                background: 'transparent',
                boxSizing: 'border-box',
                color: `$green300`
                },
            },
        },
    },
    

    'footer': {
      
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'10rem',
        gap: '3.5rem',
        
        '.shoppingCartTotal': {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '24rem',
            'section': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',

                'p': {
                    fontSize: `$md`,
                   
                    fontwheight: 'regular',
                    color: `$gray300`,
        
                },
        
                'strong': {
                    fontSize: `$lg`,
                    
                    fontwheight: 'bold',
                    color: `$gray100`,

                    'price': {
                        fontSize: `$xl`,
                    },
                },
            },

        },
        'button': {
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: '24rem',
            height: '4.31rem',

            borderRadius: '8px',

            color: `$white`,
            background: `$green500`,

            cursor: 'pointer',

            '&:hover' : {
                background: `$green300`,
            },

        },
    },
})

