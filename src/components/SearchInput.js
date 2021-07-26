import React, { useState }  from "react"
import { FaSearch, FaWindowClose } from "react-icons/fa";


const SearchInput = (props) => {
    
  const [searchInput, setSearchInput] = useState({ term: "" });

  const onChange = e => {
    setSearchInput({...searchInput, [e.target.name]: e.target.value});
    props.handleSearchTerms(e.target.value);
    props.setShowResults((e.target.value.trim().length > 0) ? true : false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (searchInput.term.trim()) {    
        props.submitSearch();
    } else {
        props.resetResults();
    }
  }

  const resetSearchInput = () => {
    setSearchInput({term: ""});
  }
  
  const handleKeyStroke = e => {
    if (e.key === "Enter") {
        handleSubmit(e);
    }
  }
  const handleResetButton = () => {
    resetSearchInput();
    props.resetResults();
  }

  return (
      <form className="search-form" onSubmit={handleSubmit} >
        <input 
            className="form-input search-input"
            name="term" 
            type="text" 
            placeholder="Find..." 
            value={searchInput.term} 
            onChange={onChange}
            autoComplete="off"            
            onKeyDown={handleKeyStroke}
            />
        {
            (searchInput.term.trim() === "" ) ? <div className="search-button" onClick={handleSubmit}><FaSearch/></div> : <div className="search-button"  onClick={handleResetButton}><FaWindowClose/></div>
        }
        
      </form>
  )
}
export default SearchInput