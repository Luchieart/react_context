import React from 'react';
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'
const Content = () => {
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
    
  <main>
    {items.length?(
          <ul>
          {items.map((item)=>(
              <li className='item' key={item.id}>
      <input
      type='checkbox'
      onChange={()=>handleCheck(item.id)}
      checked={item.checked}
      />
      <label
      style={(item.checked)?{textDecoration:'line-through'}:null}
      onDoubleClick={()=>handleCheck(item.id)}
      >{item.item}</label>
      <FaTrashAlt role='button'
      tabIndex='0' 
      onClick={()=>handleDelete(item.id)}
      />
              </li>
          ))}
      </ul>
      
    ):(
    <p style={{marginTop:'2rem'}}>You have no task Oluchi!</p>
    )
    }
  
  </main>

  )
}

export default Content;