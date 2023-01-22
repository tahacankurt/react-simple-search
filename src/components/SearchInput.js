import { useSelector } from "react-redux";
import { debounce } from "lodash";

const SearchInput = ({search}) => {
  const { loading } = useSelector(state => state.customer);

  // Client based filteration debounce is bit useless
  const handleSearch = debounce((e) => {
    search(e.target.value)
  },300)

  return (
    <div className="bg-indigo-900 p-5">
      <input disabled={loading} onChange={handleSearch} className='border-b bg-transparent w-full ring-0 outline-none text-white' placeholder='SEARCH (Client Name / Policy Number)' 
      />
    </div>
      
  )
}

export default SearchInput;
