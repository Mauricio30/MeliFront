import PropTypes from "prop-types";
import Logo from "../../assets/icons/meli-icon.svg";
import IconSearch from "../../assets/icons/search.svg";
import IconRigth from "../../assets/icons/rigth-icon.svg";

const Icon = ({ className, type, id, width, height }) => {
  const icons = {
    logo: Logo,
    search: IconSearch,
    rigth: IconRigth,
  };
  return (
    <img
      className={className}
      src={icons[type]}
      alt={id}
      width={width}
      height={height}
    />
  );
};

Icon.defaultProps = {
    className: '',
    width: 7,
    height: 7,
    id: 'Icon',
    type: 'search'
}

Icon.propTypes = {
    className: PropTypes.string,
    width: PropTypes.any,
    height: PropTypes.any,
    id: PropTypes.string,
    type: PropTypes.string
}

export default Icon;
