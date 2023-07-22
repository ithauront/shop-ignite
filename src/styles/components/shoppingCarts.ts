import { styled } from "..";

export const ShoppingCartContainer = styled('div', {
    width: '30rem',
    height: '100vh',
    background: `$gray800`,
    right: 0,

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

    }
})

export const ShoppingItems = styled('main', {
display: 'flex',
flexDirection: 'column',
alignItems: 'flex-start',
justifyContent: 'center',

'.title': {
    fontWeight: 'bold',
    lineHeight: 160,
    fontSize: `$lg`,
},

'div': {
display: 'flex',
flexDirection: 'column',
alignItems: 'flex-start',
justifyContent: 'center',
gap: '1.5rem',

},

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