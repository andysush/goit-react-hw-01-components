import { Statistic } from 'components/Statistic/Statistic';

import PropTypes from 'prop-types';
import css from 'components/StatisticBoard/StatisticBoard.module.css';

export const StatisticBoard = ({ stats, text }) => {
  return (
    <div className={css.statisticboard}>
      <section className={css.statistic}>
        {text && <h2 className={css.title}>{text}</h2>}
        <ul className={css.statlist}>
          {stats.map(({ id, label, percentage }) => (
            <Statistic
              key={id}
              id={id}
              label={label}
              percentage={percentage}
            ></Statistic>
          ))}
        </ul>
      </section>
    </div>
  );
};

StatisticBoard.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
