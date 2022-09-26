import PropTypes from 'prop-types';
import { SectionBox, TitleBox } from './Feedback.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <TitleBox>{title}</TitleBox>
      {children}
    </SectionBox>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
