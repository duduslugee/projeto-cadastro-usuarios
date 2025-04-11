import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ id: '', nome: '', telefone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiMongoUrl = 'http://localhost:8081/usuarios';
    const apiMysqlUrl = 'http://localhost:8082/usuarios';

    try {
      const [responseMongo, responseMysql] = await Promise.all([
        fetch(apiMongoUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }),
        fetch(apiMysqlUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }),
      ]);

      if (responseMongo.ok && responseMysql.ok) {
        alert('Usuário salvo com sucesso em ambos os bancos!');
        setFormData({ id: '', nome: '', telefone: '' });
      } else {
        alert('Erro ao salvar usuário.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com as APIs.');
    }
  };

  return (
    <div className="App">
      <h1>Cadastro de Usuários</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;