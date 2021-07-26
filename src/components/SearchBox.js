import React, { useState }   from "react"
import SearchInput from "./SearchInput"
import SearchResultList from "./SearchResultList"


const SearchBox = (props) => {
    
    const [searchResults, setSearchResults] = useState(props.products);    
    const [showResult, setShowResults] = useState(false);

    const handleSearchTerms = (term) => {
        if (term && term.length > 0) {
            setSearchResults( [
                ...props.products.filter(result => {
                    if (result.title.toLowerCase().includes(term.toLowerCase()) || result.category.toLowerCase().includes(term.toLowerCase())) {
                        return true;
                    } else {
                        return false;
                    }
                })
            ])            
            setShowResults(true);
        } else {
            setSearchResults(props.products);
            setShowResults(false);
        }
    }

    return (
        <div className="search-box">
            <SearchInput handleSearchTerms={handleSearchTerms} />
            <SearchResultList searchResults={searchResults} show={showResult} />
        </div>
    )
}
export default SearchBox