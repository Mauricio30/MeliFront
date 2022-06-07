import './Button.scss';

const Button = ({ name, action }) => {
    return (
        <button className='Button Button--color Button--size-medium' onClick={action}>
            {name}
        </button>
    )
}

export default Button;