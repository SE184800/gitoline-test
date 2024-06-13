import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Players from './components/Players';
function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <Players/>
     <Footer/>
    </div>
  );
}

export default App;
