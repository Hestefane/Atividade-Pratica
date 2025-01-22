
import React, { useState } from 'react';

function Gerenciador({ onAddHabit }) {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('Diário');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddHabit({ name, frequency });
      setName('');
      setFrequency('Diário');
    }
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Novo hábito..."
        onChange={(e) => setName(e.target.value)}
      />
      <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option value="Diário">Diário</option>
        <option value="Semanal">Semanal</option>
      </select>
      <button type="submit" className="add-button">Adicionar</button>
    </form>
  );
}

export default Gerenciador;
