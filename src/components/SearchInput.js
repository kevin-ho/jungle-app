import React, { useState }  from "react"

const SearchInput = (props) => {
    
  const [searchInput, setSearchInput] = useState({ term: "" });

  const onChange = e => {
    setSearchInput({...searchInput, [e.target.name]: e.target.value});
    props.handleSearchTerms(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput.term.trim()) {

    } else {
      alert("empty input");
    }
  }

  return (
      <form onSubmit={handleSubmit} >
        <input 
            className="form-input search-input"
            name="term" 
            type="text" 
            placeholder="Find..." 
            value={searchInput.term} 
            onChange={onChange}/>
      </form>
  )
}
export default SearchInput