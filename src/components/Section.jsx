import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
