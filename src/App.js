import './App.css';
import Card from './Components/Card/Card.js'
import Header from './Components/Header/Header.js'

function App() {
  
  return (
    <>
      <Header />
      <Card path="../src/Assets/RunningShoes.jpg" name="Running Shoes" price = {5000}/>
    </>
  );
}

export default App;