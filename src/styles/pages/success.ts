import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,
    h1: {
        fontSize: `$2xl`,
        color: `$gray100`,
    },
    p: {
        fontSize: `$xl`,
        color: `$gray300`,
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },
    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: `$lg`,
        color: `$green500`,
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
            color: `$green300`,
        },
    },
    '.image-array-container': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const ImageContainerSuccess = styled('div', {
   
    maxWidth: 130,
    height: 130,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 100,
    padding: '0.25rem',
    position: 'relative',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.5)',
    marginLeft: '-2.5rem', 
    ':first-child': {
        marginLeft: '0', 
    },
    img: {
        objectFit: 'cover',
    },
});
