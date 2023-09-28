import Header from './Header';
import Content from './Content';
import { useState } from 'react';
import Footer from './Footer'


function App() {
    const[items,setItems]=useState([
      {
          id:1,
          checked:false,
          item:'Wash your clothes'
      },
      {
          id:3,
          checked:false,
          item:'Continue your react tutorial'
      },
      {
          id:4,
          checked:false,
          item:'Start your seminar report'
      }
  ]);

  const handleCheck=(id)=>{
    const listItems=items.map((item)=> item.id===id?{...item,checked:!item.checked}:item);
    setItems(listItems);
  localStorage.setItem('shoppinglist',JSON.stringify(listItems));
    }
    const handleDelete=(id)=>{
  const listItems=items.filter((item)=>item.id !==id);
  setItems(listItems);
  localStorage.setItem('shoppinglist',JSON.stringify(listItems));
    
    }

  return (
    <div className="App">
    <Header title='ToDo List'/>
    <Content items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}/>
   <Footer length={items.length}/>
    </div>
  );
}

export default App;