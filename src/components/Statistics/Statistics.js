import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <StatItem>
        <span>Good: </span>
        <span>{good}</span>
      </StatItem>
      <StatItem>
        <span>Neutral: </span>
        <span>{neutral}</span>
      </StatItem>
      <StatItem>
        <span>Bad: </span>
        <span>{bad}</span>
      </StatItem>
      <StatItem>
        <span>Total: </span>
        <span>{total}</span>
      </StatItem>
      <StatItem>
        <span>Positive feedback: </span>
        <span>{positivePercentage} %</span>
      </StatItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
