import { useState } from 'react';
import './App.css';
import GoalInput from './components/GoalInput/GoalInput';
import GoalList from './components/GoalList/GoalList';

const initialGoals = [
  { id: 'g1', text: 'Doing Exercise' },
  { id: 'g2', text: 'Doing Breakfast' },
];

function App() {
  const [goals, setGoals] = useState(initialGoals);

  const addGoalsHandler = (goal) => {
    setGoals((prevGoals) => {
      return [goal, ...prevGoals];
    });
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((prevGoal) => {
      const newGoalsList = prevGoal.filter((goal) => goal.id !== goalId);
      return newGoalsList;
    });
  };

  return (
    <div className='App'>
      <section id='goal-form'>
        <GoalInput onAdd={addGoalsHandler} />
      </section>
      <section id='goals'>
        {goals.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        ) : (
          <GoalList goals={goals} onDelete={deleteGoalHandler} />
        )}
      </section>
    </div>
  );
}

export default App;
