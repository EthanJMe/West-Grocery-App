import { Button } from 'react-bootstrap';
import './App.css';
import { Items } from './Items';
import { useState } from 'react';
function App() {
  const [runningTotal, setRunningTotal] = useState(0)
  const [groceryList, setGroceryList] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const found = Items.find(obj => {
    return obj.queryName === searchQuery.toLowerCase();
  });
  return (
    <>
    <div><label>Search </label>
    <input onChange={(e)=>{
      setSearchQuery(e.target.value)
    }}/>
</div>

<div>{found &&(
  <div>
    {found.name}: {found.stringPrice}
    <Button onClick={()=>{
        setRunningTotal(found.price*quantity+runningTotal) 
        for(let i=0; i< quantity; i++){
        groceryList.push(found)}
      console.log(groceryList)}}
        >Buy</Button>
  </div>
)}</div>

    <label>Quantity Per Click</label>
    <input onChange={(e)=>{
      setQuantity(e.target.value)
    }}/>

    {
      Items.map((item, index) => {
      return(
        <>
        <div>{item.name}: {item.stringPrice}</div>
        <Button onClick={()=>{
        setRunningTotal(item.price*quantity+runningTotal) 
        for(let i=0; i< quantity; i++){
        groceryList.push(item)}
      console.log(groceryList)}}
        >Buy</Button>
      </>
      )
    })}

    <div className='cart'>
      Cost of your cart: {runningTotal.toFixed(2)}

    {groceryList.map((item, index)=>{
      //you need to remove things last to first or it messes up the running total
      return( 
        <>
        {item.name}
        <Button onClick={()=>{groceryList.splice(groceryList.lastIndexOf(item.name))
          setRunningTotal(runningTotal-item.price)
        }}>Remove</Button>
        </>
        )
      })}
    
    </div>
    
    </>
  );
}

export default App;
