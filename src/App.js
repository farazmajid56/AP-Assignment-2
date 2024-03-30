import './App.css';
import Card from './Components/Card/Card.js'
import Header from './Components/Header/Header.js'
import Form from "./Components/Form/Form";
import {useState} from "react";
function App() {
  const maleShoes = [
    {path:"https://www.ndure.com/cdn/shop/files/M-BF-PXL-0018-BLACKleathertag.jpg?v=1695039395",name:"Formal Shoes",price:1750,isSold:false},
    {path:"https://www.ndure.com/cdn/shop/products/M-BF-STP-0002-TAN.jpg?v=1664362573",name:"Formal Shoes",price:1750,isSold:true},
    {path:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9b26aa8f-0173-409b-b30a-7ce2d88573a4/custom-nike-dunk-low-by-you.png",name:"Running Shoes",price:5000,isSold:true},
    {path:"https://pyxis.nymag.com/v1/imgs/f31/7b1/b5b2e7f1d7f2e58d23879583bc20b1451e-16---.rsquare.w600.jpg",name:"Casual Shoes",price:2500,isSold:false}
  ]
  let renderMaleShoes = maleShoes.map((x, index) => <Card key={index} path={x.path} name={x.name} price={x.price} isSold={x.isSold} />);

  const femaleShoes = [
    {path:"https://englishshoesonline.com/cdn/shop/files/RL-309_1.jpg?v=1710842534&width=600",name:"Casual",price:3500,isSold:true},
    {path:"https://www.servis.pk/cdn/shop/files/L-EK-0201055BEIGE.jpg?v=1708695018&width=1280",name:"Sandels 2",price:2750,isSold:false},
    {path:"https://adoro.com.pk/cdn/shop/files/FormatreadPump-Black.jpg?v=1709632961",name:"Formal",price:7700,isSold:false},
    {path:"https://static-01.daraz.pk/p/688c2c194cbf01a782477e4a8e9593c2.jpg",name:"Sandels",price:2750,isSold:false}
  ]
  let renderFemaleShoes = femaleShoes.map((x, index) => <Card key={index} path={x.path} name={x.name} price={x.price} isSold={x.isSold} />);

  const [Gender,setGender] = useState(false)
  const ChangeShoes = () => setGender(!Gender)

  return (
    <>
      <Header />
      <div id="cardContainer">{Gender ? renderMaleShoes : renderFemaleShoes}</div>
      <button id="changeShoes" onClick={ChangeShoes}>Change All Shoes</button>
      <Form />
    </>
  );
}

export default App;