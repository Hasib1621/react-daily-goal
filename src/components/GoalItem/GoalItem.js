import classes from './GoalItem.module.css';

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes['goal-item']} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default GoalItem;
