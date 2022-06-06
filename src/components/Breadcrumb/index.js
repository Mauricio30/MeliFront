import { Fragment } from "react";
import Icon from "../../assets/icons/rigth-icon.svg";
import "./Breadcrumb.scss";

const Breadcrumb = ({ paths }) => {
  return (
    <section id="Breadcrumb" className="breadcrumb">
      {paths.map((path, idx) => (
        <Fragment key={path}>
          <span className="breadcrumb__path">{`  ${path}  `}</span>
          {idx + 1 < paths.length && <img src={Icon} alt={path} />}
        </Fragment>
      ))}
    </section>
  );
};

export default Breadcrumb;
