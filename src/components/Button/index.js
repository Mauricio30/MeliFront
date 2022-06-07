import PropTypes from 'prop-types'; 
import './Button.scss';

const Button = ({ name, action }) => {
    return (
        <button className='button button--color button--size-medium' onClick={action}>
            {name}
        </button>
    )
}

Button.defaultProps = {
    action: undefined
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func
}

export default Button;