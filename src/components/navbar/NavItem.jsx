import "react";
import PropTypes from "prop-types";

function NavItem({ label, href }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {label}
      </a>
    </li>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;
