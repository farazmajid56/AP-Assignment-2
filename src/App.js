import './App.css';
import Card from './Components/Card/Card.js'
import Header from './Components/Header/Header.js'
import Form from "./Components/Form/Form";
function App() {
  const data = [
    {path:"https://www.flashfootwear.com.pk/wp-content/uploads/2021/01/Blue-Ecosense-Lightning-Shoes-for-Kids-1.jpg",name:"Running Shoes",price:5000,isSold:true},
    {path:"https://5.imimg.com/data5/SELLER/Default/2022/11/KE/VX/MV/116453489/white-casual-shoes-for-men-500x500.jpg",name:"Casual Shoes",price:2500,isSold:false},
    {path:"https://m.media-amazon.com/images/I/71qgiMBkSXL._AC_SL1200_.jpg",name:"Formal Shoes",price:1750,isSold:false}
  ]
  return (
    <>
      <Header />
      {data.map( x => <Card path={x.path} name={x.name} price={x.price} isSold={x.isSold} />)}
      <Form />
    </>
  );
}

export default App;