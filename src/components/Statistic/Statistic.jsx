import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import { getRandomHexColor } from './randomBg';
export const Statistic = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
      className={css.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

Statistic.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
