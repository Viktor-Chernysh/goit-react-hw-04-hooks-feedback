import s from './Feedback.module.css';
import PropTypes from 'prop-types';

function Statistics(props) {
  const { good, neutral, bad, total, posFeedback } = props;
  return (
    <>
      <p className={s.statistics_item}>
        Good:<span>{good}</span>
      </p>
      <p className={s.statistics_item}>
        Neutral:<span>{neutral}</span>
      </p>
      <p className={s.statistics_item}>
        Bad:<span>{bad}</span>
      </p>
      <p>
        Total:<span>{total}</span>
      </p>
      <p>
        Positive feedback:<span>{posFeedback}%</span>
      </p>
    </>
  );
}
export default Statistics;
Statistics.propTypes = {
  state: PropTypes.object,
  total: PropTypes.number.isRequired,
  posFeedback: PropTypes.number.isRequired,
};
