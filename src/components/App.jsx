import './App.css'
import Body from "./Body/Body"
import NavBar from './navbar/NavBaar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import Macetas from './Tarjetas/Macetas'
import Canteros from './Tarjetas/Canteros'

function App() {
  return (
    <>
     <NavBar/>
     <Header/>
     <ItemListContainer greeting = "Listado de productos" />
     <Macetas/>
     <Canteros/>
     <Footer/>
    </>
  )
}


export default App
