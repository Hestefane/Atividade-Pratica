import React, { useState, useEffect } from 'react';
import Gerenciador from './gerenciador';

function Habitos() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habitos');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem('habitos', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits([...habits, { ...habit, completed: false }]);
  };

  const toggleCompletion = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  return (
    <div className="dashboard">
      <h2>Lista de Hábitos</h2>
      <Gerenciador onAddHabit={addHabit} />
      <table className="habit-table">
        <thead>
          <tr>
            <th>Hábito</th>
            <th>Frequência</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {habits.length > 0 ? (
            habits.map((habit, index) => (
              <tr key={index} className={habit.completed ? 'completed-row' : ''}>
                <td>{habit.name}</td>
                <td>{habit.frequency}</td>
                <td>{habit.completed ? 'Concluído ✅' : 'Pendente ❌'}</td>
                <td>
                  <button
                    onClick={() => toggleCompletion(index)}
                    className={`completion-button ${habit.completed ? 'completed' : ''}`}
                  >
                    {habit.completed ? 'Desfazer' : 'Concluir'}
                  </button>
                  <button onClick={() => deleteHabit(index)} className="delete-button">
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-habits">
                Nenhum hábito cadastrado. Comece adicionando um hábito!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Habitos;
