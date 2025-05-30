import "react";
import PropTypes from "prop-types";

function FooterSection({ title, children }) {
  return (
    <div className="col-md-3 mb-4">
      <h3 className="h5">{title}</h3>
      {children}
    </div>
  );
}

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterSection;
