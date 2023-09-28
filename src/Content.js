import React from 'react';

import ItemList from './ItemList';



const Content = ({items,handleCheck,handleDelete}) => {
   
   
  return (
    
  <main>
    {items.length?(
      <ItemList
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />  
    ):(
    <p style={{marginTop:'2rem'}}>You have no task Oluchi!</p>
    )}
  </main>

  )
}

export default Content;