import './App.css';
import Card from './Components/Card/Card.js'
import Header from './Components/Header/Header.js'
import Form from "./Components/Form/Form";
import {useState} from "react";
function App() {
  const maleShoes = [
    {path:"https://www.flashfootwear.com.pk/wp-content/uploads/2021/01/Blue-Ecosense-Lightning-Shoes-for-Kids-1.jpg",name:"Running Shoes",price:5000,isSold:true},
    {path:"https://5.imimg.com/data5/SELLER/Default/2022/11/KE/VX/MV/116453489/white-casual-shoes-for-men-500x500.jpg",name:"Casual Shoes",price:2500,isSold:false},
    {path:"https://m.media-amazon.com/images/I/71qgiMBkSXL._AC_SL1200_.jpg",name:"Formal Shoes",price:1750,isSold:false}
  ]
  const femaleShoes = [
    {path:"https://heelsshoes.pk/cdn/shop/files/IMG_7223.jpg?v=1711361836&width=600",name:"Formal",price:7700,isSold:true},
    {path:"https://www.ndure.com/cdn/shop/files/1_8fd5379c-b7d7-414a-a133-ae57e46e26e4.jpg?v=1700644644",name:"Casual",price:3500,isSold:false},
    {path:"https://image.doba.com/dg7-ObqdRNhppJDg/eilyken-fashion-women-sandals-thin-low-heel-back-strap-rome-sandal-summer-gladiator-casual-sandal-narrow-band-shoes.webp",name:"Sandels",price:2750,isSold:false}
  ]
  const [Type,setType] = useState(false)
  const ChangeShoes = () => setType(!Type)

  let shoesToRender;
  if (Type) {
    shoesToRender = maleShoes.map((x, index) => <Card key={index} path={x.path} name={x.name} price={x.price} isSold={x.isSold} />);
  } else {
    shoesToRender = femaleShoes.map((x, index) => <Card key={index} path={x.path} name={x.name} price={x.price} isSold={x.isSold} />);
  }

  return (
    <>
      <Header />
      {shoesToRender}
      <button id="changeShoes" onClick={ChangeShoes}>Change All Shoes</button>
      <Form />
    </>
  );
}

export default App;