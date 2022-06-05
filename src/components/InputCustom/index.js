import IconSearch from "../../assets/icons/search.svg";
import "./InputCustom.scss";

const InputCustom = ({ placeholder, value, onChange, type, icon, onClick }) => (
  <label id="input-custom" className="input-custom">
    <input
      className="input-custom__input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {icon && (
      <button className="input-custom__button" onClick={onClick}>
        <img
          className="search-box__logo"
          src={IconSearch}
          alt="MeliIcon"
          width={15}
          height={15}
        />
      </button>
    )}
  </label>
);

export default InputCustom;
