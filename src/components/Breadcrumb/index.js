import { Fragment } from "react";
import PropTypes from "prop-types";
import "./Breadcrumb.scss";
import Icon from "../Icon";

const Breadcrumb = ({ paths }) => {
  return (
    <section id="Breadcrumb" className="breadcrumb">
      {paths.map((path, idx) => (
        <Fragment key={path}>
          <span className="breadcrumb__path">{`  ${path}  `}</span>
          {idx + 1 < paths.length && (
            <Icon
              type="rigth"
              id={path}
            />
          )}
        </Fragment>
      ))}
    </section>
  );
};

Breadcrumb.defaultProps = {
  paths: [],
};

Breadcrumb.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string),
};

export default Breadcrumb;
