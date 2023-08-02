import './App.css';
import {Book, User} from "./ui";

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Sidebar/>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <div>
      <h2>
        BookQuest
      </h2>
      <User/>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <h3>Desarrollado por Daniela Liendo</h3>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div>
      <h1>Mi Librería</h1>
      <div>
        <label htmlFor="search-input">Buscar libros:</label>
        <input type="text" id="search-input" placeholder="Buscar libros..."/>
        <button type="button" aria-label="Buscar">Buscar</button>
      </div>
      <div>
        <button type="button">Categoría 1</button>
        <button type="button">Categoría 2</button>
        <button type="button">Categoría 3</button>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <h1>¡Bienvenido a BookQuest, el éxtasis literario te espera!</h1>
      <h2>
        Explora, descubre y sumérgete en mundos inimaginables a través de nuestras páginas. <br/>
        Encuentra el libro perfecto para satisfacer tu sed de conocimiento y aventura. ¿Listo para comenzar tu búsqueda
        literaria? <br/>
        <br/>
        ¡Adelante, el viaje empieza aquí!
      </h2>
      <ol>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
      </ol>
    </div>
  )
}
