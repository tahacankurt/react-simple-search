const ListItem = ({customer,itemIndex}) => {
  
  return (
    <div className={`py-2 px-5 ${itemIndex % 2 ? "bg-gray-200" : "bg-white" } `} >
      
      <div className="flex flex-row pb-2" >
        <h2 className="text-lg">{customer?.name}</h2>  
      </div> 

      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/3 w-full">
          {customer?.phone}
        </div> 
        <div className="md:w-1/3 w-full">
          {customer?.mail}
        </div> 
        <div className=" md:w-1/3 w-full">
          {customer?.policyNo}
        </div> 

      </div> 
    </div>
  )
}

export default ListItem;
