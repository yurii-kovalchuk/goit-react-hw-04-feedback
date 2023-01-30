import { OptionsWrapper, OptionBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <OptionsWrapper>
      {options.map(option => (
        <OptionBtn
          key={option}
          type="button"
          onClick={handleClick}
          name={option}
        >
          {option}
        </OptionBtn>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
