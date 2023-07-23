import { styled } from "..";

export const ShoppingCartContainer = styled('div', {
    width: '30rem',
    minHeight: '100vh',
    margin: '0 auto',
    background: `$gray800`,
    

    display: 'flex',
    flexDirection: 'column',

    'button' : {
        border: 'none',
        right: '1.5rem',
        width: '1.5rem',
        height: '1.5rem',

        cursor: 'pointer',

        background: 'transparent',
        color: `$gray500`,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    'main': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',

        '.product': {
            display: 'flex',
          
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '1.25rem',

            width: '24rem',
            height: '5.875rem',

            '.productInfo': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '0.5rem',

        
                'p': {
                    fontSize: `$md`,
                    lineHeight: 160,
                    fontwheight: 'regular',
                    color: `$gray300`,
        
                },
        
                'strong': {
                    fontSize: `$md`,
                    lineHeight: 160,
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
                    lineHeight: 160,
                    fontwheight: 'regular',
                    color: `$gray300`,
        
                },
        
                'strong': {
                    fontSize: `$lg`,
                    lineHeight: 160,
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
                lineHeight: 160,
                fontwheight: 'regular',
                color: `$gray300`,
    
            },
    
            'strong': {
                fontSize: `$md`,
                lineHeight: 160,
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
