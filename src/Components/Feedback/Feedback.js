import { useState } from 'react';
import Section from '../Section/Section';
import Notification from './Notification';
import Button from './Button';
import Statistics from './Statistics';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(p => p + 1);
        break;
    }
  };
  const totalElements = () => {
    return good + neutral + bad;
  };
  const positiveFeedback = () => {
    return Math.round((good / totalElements()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Button name="good" onClick={handleClick} />
        <Button name="neutral" onClick={handleClick} />
        <Button name="bad" onClick={handleClick} />
      </Section>
      {totalElements() > 0 ? (
        <Section title="Statistics">
          <Statistics
            // state={this.state}
            good={good}
            bad={bad}
            neutral={neutral}
            total={totalElements()}
            posFeedback={positiveFeedback()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}
// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     const { name } = e.target;
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   totalElements = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   positiveFeedback = () => {
//     return Math.round((this.state.good / this.totalElements()) * 100);
//   };
//   render() {
//     const { handleClick, positiveFeedback, totalElements } = this;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <Button name="good" onClick={handleClick} />
//           <Button name="neutral" onClick={handleClick} />
//           <Button name="bad" onClick={handleClick} />
//         </Section>
//         {totalElements() > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               state={this.state}
//               total={totalElements()}
//               posFeedback={positiveFeedback()}
//             />
//           </Section>
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </>
//     );
//   }
// }
// export default Feedback;
