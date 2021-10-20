import s from './Feedback.module.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, name } = props;
  return (
    <button className={s.button} type="button" name={name} onClick={onClick}>
      {name}
    </button>
  );
}
export default Button;
Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};
