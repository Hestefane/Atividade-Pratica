import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState({ name: "", frequency: "" });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [viewMode, setViewMode] = useState("list");
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Atualiza a classe do body com base no modo
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleAddOrEditHabit = () => {
    if (editMode) {
      const updatedHabits = habits.map((habit, index) =>
        index === editIndex ? newHabit : habit
      );
      setHabits(updatedHabits);
    } else {
      setHabits([...habits, { ...newHabit, completed: false }]);
    }
    setNewHabit({ name: "", frequency: "" });
    setEditMode(false);
    setShowModal(false);
  };

  const handleEditHabit = (index) => {
    setNewHabit(habits[index]);
    setEditMode(true);
    setEditIndex(index);
    setShowModal(true);
  };

  const toggleCompletion = (index) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(updatedHabits);
  };

  const handleDeleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "list" ? "grid" : "list");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <h1>Gerenciador de Hábitos</h1>
        <div>
          <button className="toggle-view" onClick={toggleViewMode}>
            Modo {viewMode === "list" ? "Grade" : "Lista"}
          </button>
          <button className="toggle-dark-mode" onClick={toggleDarkMode}>
            {darkMode ? "Modo Claro" : "Modo Escuro"}
          </button>
        </div>
        <button className="add-button" onClick={() => setShowModal(true)}>
          Adicionar Hábito
        </button>
      </header>

      <section className={`habit-container ${viewMode}`}>
        {habits.map((habit, index) => (
          <div key={index} className="habit-card">
            <h3>{habit.name}</h3>
            <p>Frequência: {habit.frequency}</p>
            <p>Status: {habit.completed ? "Concluído" : "Pendente"}</p>
            <button
              className={`completion-button ${habit.completed ? "completed" : ""}`}
              onClick={() => toggleCompletion(index)}
            >
              {habit.completed ? " Pendente" : "Concluído"}
            </button>
            <button className="edit-button" onClick={() => handleEditHabit(index)}>
              Editar
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteHabit(index)}
            >
              Excluir
            </button>
          </div>
        ))}
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Adicionar Novo Hábito</h2>
            <label>
              Nome do Hábito:
              <input
                type="text"
                value={newHabit.name}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, name: e.target.value })
                }
              />
            </label>
            <label>
              Frequência:
              <select
                value={newHabit.frequency}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, frequency: e.target.value })
                }
              >
                <option value="">Selecione</option>
                <option value="Diário">Diário</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensal">Mensal</option>
              </select>
            </label>
            <div className="modal-actions">
              <button className="save-button" onClick={handleAddOrEditHabit}>
                Salvar
              </button>
              <button
                className="cancel-button"
                onClick={() => {
                  setShowModal(false);
                  setEditMode(false);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

