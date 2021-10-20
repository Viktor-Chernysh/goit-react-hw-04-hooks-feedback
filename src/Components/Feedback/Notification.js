import Section from '../Section/Section';
import PropTypes from 'prop-types';

function Notification(props) {
  const { message } = props;
  return (
    <div>
      <Section title={message} />
    </div>
  );
}
export default Notification;
Notification.defaultProps = {
  message: 'No feedback given',
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
