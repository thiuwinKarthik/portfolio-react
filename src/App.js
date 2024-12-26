import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App ">
     <Navbar/>
     <Header/>
     <About/>
     <Experience/>
     <Contact/>
    </div>
  );
}

export default App;
