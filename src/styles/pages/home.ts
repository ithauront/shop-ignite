import { ComponentPropsWithRef } from "react";
import { styled } from "..";

export const HomeContainer = styled('main', {
display: 'flex',

width: '100%',
maxWidth: 'calc(100vw - (100vw - 1180px)/2)',
marginLeft: 'auto',
minHeight: 656,
})as React.FC<ComponentPropsWithRef<'main'> & { slidesInView?: number }>;

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    minWidth: 540,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

   

    img: {
        objectFit: 'cover',
    },


    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        '.info' : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'no-wrap',


            'strong': {
                fontSize: '$lg',
                color: '$gray100'
            },
    
            span: {
                fontSize: '$xl',
                fontWeight: 'bold',
                color: '$green300'
            },
        },
       

        '.shoppingCart': {
    
            width: '3.5rem',
            height: '3.5rem',
        
            padding: '0.75rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        
            background: `$green500`,
            color: `$white`,

            '&:hover' : {
                background: `$green300`,  
            }
        
        }


    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})