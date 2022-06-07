import PropTypes from 'prop-types';
import Icon from '../Icon';
import "./InputCustom.scss";

const InputCustom = ({ placeholder, value, onChange, type, icon, onClick }) => (
  <label id="input-custom" className="input-custom">
    <input
      className="input-custom__input input-custom__input--size"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {icon && (
      <button className="input-custom__button" onClick={onClick}>
        <Icon
          className="search-box__logo"
          type='search'
          id="searchIcon"
          width={15}
          height={15}
        />
      </button>
    )}
  </label>
);

InputCustom.defaultProps = {
    placeholder: 'Ingresa un valor',
    value: '',
    onChange: undefined,
    type: 'text',
    icon: '',
    onClick: undefined
}

InputCustom.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
}

export default InputCustom;
