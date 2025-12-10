import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [usuario, setUsuario] = useState('')
  const [logueado, setLogueado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre && usuario) {
      setLogueado(true)
    }
  }

  const handleLogout = () => {
    setNombre('')
    setUsuario('')
    setLogueado(false)
  }

  return (
    <div className="container">
      {!logueado ? (
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <button type="submit">Ingresar</button>
          </form>
        </div>
      ) : (
        <div className="welcome-container">
          <h1>¡Hola, {nombre}!</h1>
          <p>Bienvenido {usuario}</p>
          <button onClick={handleLogout}>Salir</button>
        </div>
      )}
    </div>
  )
}

export default App
