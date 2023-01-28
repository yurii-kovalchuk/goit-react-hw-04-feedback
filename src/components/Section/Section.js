import PropTypes from 'prop-types';
import { SectionComponent } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionComponent>
      <h2>{title}</h2>
      {children}
    </SectionComponent>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
