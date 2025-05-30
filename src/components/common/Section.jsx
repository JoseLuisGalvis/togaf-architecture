// Section.jsx
import { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../../contexts/ThemeContext";

function Section({ id, title, children, dataAos }) {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id={id}
      className="section-container card mb-4 shadow"
      data-aos={dataAos}
    >
      <div className="card-body">
        <h2 className="card-title h4">{title}</h2>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dataAos: PropTypes.string,
};

export default Section;
