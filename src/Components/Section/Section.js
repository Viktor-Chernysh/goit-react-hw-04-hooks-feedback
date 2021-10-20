import PropTypes from 'prop-types';
import s from './Section.module.css';
function Section(props) {
  const { title, children } = props;
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
