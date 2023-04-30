import { getRandomHexColor } from './randomBg';
import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ stats, text }) => {
  return (
    <section className={css.statistics}>
      {text && <h2 className={css.title}>{text}</h2>}
      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  text: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
