import React, { useState } from 'react';
import classes from './GoalInput.module.css';
import Button from '../UI/Button';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredGoal(e.target.value);
  };

  const submitGoalHandler = (e) => {
    e.preventDefault();

    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const goal = {
      id: Math.random().toString(),
      text: enteredGoal,
    };
    props.onAdd(goal);
    setEnteredGoal('');
  };
  return (
    <form onSubmit={submitGoalHandler}>
      <div
        className={`${classes['form-control']} ${
          !isValid && classes['invalid']
        }`}
      >
        <label>Daily Goal</label>
        <input type='text' value={enteredGoal} onChange={goalChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default GoalInput;
