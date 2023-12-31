import Header from './Header';
import AddItem from './AddItem';
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
  const [newItem,setNewItem]=useState('')

const setAndSaveItems=(newItems)=>{
  setItems(newItems);
  localStorage.setItem('shoppinglist',JSON.stringify(newItems));
}


  const addItem =(item)=>{
const id=items.length? items[items.length-1].id +1:1;
const myNewItem={id,checked:false,item};
const listItems=[...items,myNewItem];
setAndSaveItems(listItems);
  }

  const handleCheck=(id)=>{
    const listItems=items.map((item)=> item.id===id?{...item,checked:!item.checked}:item);
    setAndSaveItems(listItems);

    }
    const handleDelete=(id)=>{
  const listItems=items.filter((item)=>item.id !==id);
  setAndSaveItems(listItems);

    
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if (!newItem) return;
      addItem(newItem);
      setNewItem('');


    }

  return (
    <div className="App">
    <Header title='ToDo List'/>
    <AddItem
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
    />
    <Content items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}/>
   <Footer length={items.length}/>
    </div>
  );
}

export default App;