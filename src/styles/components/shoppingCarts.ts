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
    left:'0',
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

    '@media (max-width: 768px)': {
    width: '100vw',
    padding: '4rem 1rem',

    main: {
      width: '100%',

      '.close-button': {
        marginLeft: 'auto',
      },

      '.product': {
        width: '100%',
        flexWrap: 'wrap',
      },
    },

    footer: {
      '.shoppingCartTotal': {
        width: '100%',
      },

      'button': {
        width: '100%',
      },
    },
  },
    
}
)

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 130,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


    img : {
        objectFit: 'cover',
    }})