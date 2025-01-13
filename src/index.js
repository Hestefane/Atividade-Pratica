import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importando o CSS global
import App from './App';  // Importando o componente principal do seu app
import reportWebVitals from './reportWebVitals';  // Importando a função de monitoramento de performance (opcional)

const root = ReactDOM.createRoot(document.getElementById('root'));  // Garantindo que o elemento com id 'root' existe
root.render(
  <React.StrictMode>
    <App />  {/* Renderizando o componente App dentro do root */}
  </React.StrictMode>
);

// Para medir a performance do seu app (opcional)
reportWebVitals();

