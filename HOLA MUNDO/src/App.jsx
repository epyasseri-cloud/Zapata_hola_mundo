// Importar la función useState de React para manejar el estado
import { useState } from 'react'
// Importar los estilos CSS de la aplicación
import './App.css'

// Componente principal de la aplicación
function App() {
  // Estado para guardar el nombre del usuario
  const [nombre, setNombre] = useState('')
  
  // Estado para guardar el nombre de usuario
  const [usuario, setUsuario] = useState('')
  
  // Estado para saber si el usuario está logueado o no
  const [logueado, setLogueado] = useState(false)

  // Función que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    // Prevenir que la página se recargue al enviar el formulario
    e.preventDefault()
    
    // Si ambos campos tienen contenido, cambiar logueado a true
    if (nombre && usuario) {
      setLogueado(true)
    }
  }

  // Función que se ejecuta cuando el usuario hace clic en "Salir"
  const handleLogout = () => {
    // Limpiar todos los campos
    setNombre('')
    setUsuario('')
    // Cambiar logueado a false para volver al formulario
    setLogueado(false)
  }

  // Retornar el HTML de la aplicación
  return (
    <div className="container">
      {/* Si NO está logueado, mostrar el formulario de login */}
      {!logueado ? (
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            {/* Input para el usuario - se actualiza con onChange */}
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            
            {/* Input para el nombre - se actualiza con onChange */}
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            
            {/* Botón para enviar el formulario */}
            <button type="submit">Ingresar</button>
          </form>
        </div>
      ) : (
        /* Si está logueado, mostrar el mensaje de bienvenida */
        <div className="welcome-container">
          <h1>¡Hola, {nombre}!</h1>
          <p>Bienvenido {usuario}</p>
          
          {/* Botón para desloguearse */}
          <button onClick={handleLogout}>Salir</button>
        </div>
      )}
    </div>
  )
}

// Exportar el componente para que pueda ser usado en otros archivos
export default App
