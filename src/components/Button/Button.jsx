import Boton from 'react-bootstrap/Button';

const Button = ({ onClick, texto, variant, type }) => {
    return (
        <Boton onClick={() => onClick } variant={variant} type={type}>{ texto }</Boton>
    )
}

export default Button