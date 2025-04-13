import React, { useState } from 'react'
import './SearchBar.css';
import { YT_SEARCH_API } from '../../utils/constants';
import useDebounce from '../../utils/useDebounce';
import { useDispatch, useSelector } from 'react-redux';
import { searchCache } from '../../utils/searchSlice';

const SearchBar = () => {
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const cachedResults = useSelector(store=>store.search.cache);
    const dispatch = useDispatch();

    const fetchDropdownList = async(inputValue) => {
        const data = await fetch(YT_SEARCH_API+inputValue);
        const list = await data.json();
        console.log(list,'list');
        if(list){
            setSuggestions(list[1]);
            dispatch(searchCache({[inputValue]:list[1]}));
        }
    }

    const fetchDebounce = useDebounce(fetchDropdownList,500);

    const handleSearch = (event) => {
        if(cachedResults[event.target.value]){
            setSuggestions(cachedResults[event.target.value]);
        }else{
            fetchDebounce(event.target.value);
        }
    }

  return (
  <div className='searchbar-container'>
    <div>
        <input 
            placeholder='Search' 
            className='search-bar' 
            onChange={handleSearch}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
        />
        <button className='search-button'>Search</button>
    </div>
    {showSuggestions && suggestions && <div className='suggestions-dropdown'>
        {suggestions.map(value=>(<div className='search-options'>{value}</div>))}
    </div>}
    </div>
  )
}

export default SearchBar