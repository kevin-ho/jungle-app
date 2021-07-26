import React, { useState }   from "react"
import SearchInput from "./SearchInput"
import SearchResultList from "./SearchResultList"
import { useHistory } from 'react-router-dom';

const SearchBox = (props) => {
      
    const [searchResults, setSearchResults] = useState(props.products);    
    const [showResult, setShowResults] = useState(false);
    const history = useHistory();

    const handleSearchTerms = (term) => {
        if (term && term.trim().length > 0) {
            setSearchResults( [
                ...props.fullResults.filter(result => {
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
        }
    }

    const submitSearch = () => {
        if (searchResults) {
            props.setProducts(searchResults);
        } else {
            props.resetResults();
        }
        setShowResults(false);
        history.push('/');
    }

    return (
        <div className="search-box">
            <SearchInput handleSearchTerms={handleSearchTerms} setShowResults={setShowResults} submitSearch={submitSearch} resetResults={props.resetResults} />
            <SearchResultList searchResults={searchResults} show={showResult} setShowResults={setShowResults} submitSearch={submitSearch} />
        </div>
    )
}
export default SearchBox