import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import SearchInput from "./components/SearchInput";
import { customerActions } from "./redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.customer) ?? [];
  let [filteredItems,setFilteredItems] = useState(items);

  useEffect(() => {
    dispatch(customerActions.listCustomers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const search = (searchString) => {
    const filteredCustomers = items.filter((item) => item.fullTextSearchString.includes(searchString));
    setFilteredItems(filteredCustomers ?? [])
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="fixed left-1/2 md:top-1/2 top-0 transform -translate-x-1/2 md:-translate-y-1/2 md:h-96 h-full overflow-hidden bg-white md:rounded-xl shadow-sm md:w-3/5 w-full">
        <SearchInput search={search} />
        <hr className="my-1" />
        <List customers={filteredItems} />
      </div>
    </div>
  );
}

export default App;
