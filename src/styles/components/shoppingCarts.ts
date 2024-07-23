import { styled } from "..";

export const ShoppingCartContainer = styled('div', {
    width: '30rem',
    minHeight: '100vh',
    margin: '0 auto',
    background: `$gray800`,
    padding: '1.5rem',
    gap:'1.5rem',

    display: 'flex',
    flexDirection: 'column',

    '.title': {
        marginLeft: '1.5rem',
        fontSize: `$xl`,
        fontWeight: 'bolder',
    },
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
    'main': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '1.25rem',
        marginTop: '1.5rem',
        width: '24rem',
        
        '.product': {
           
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
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
        justifyContent: 'space-between',
        

        '.shoppingCartTotal': {
            width: '24rem',
            'section': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',

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

export const ShoppingCartItems = styled('div', {

    '.product': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '1.25rem',
    
        '.productInfo': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '0.5rem',
    
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
        }
    }
    
})
