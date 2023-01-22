import React from 'react';
import ListItem from "./ListItem";

const List = ({customers}) => {
  return (
    <ul className='overflow-auto md:h-76 h-full'>
      {customers.length ?
        customers.map((customer,index) => <ListItem itemIndex={index} key={customer.id} customer={customer} />)
        :
        <div className='text-gray-500 text-center mt-3'>0 Customer Found</div>
      }
    </ul>
  )
}

export default List;
