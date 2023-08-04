import GoalItem from '../GoalItem/GoalItem';
import classes from './GoalList.module.css';

const GoalList = (props) => {
  return (
    <ul className={classes['goal-list']}>
      {props.goals.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDelete}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
