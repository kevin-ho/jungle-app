import React from "react"
import SearchResult from "./SearchResult"

const SearchResultList = (props) => {

    const handleClicksFullResults = () => {
        props.submitSearch();
    }

    return (
        <div className={`search-result-box ${props.show ? "" : "hidden"}`}>
            <div className={`no-matches ${props.searchResults.length <= 0 ? "" : "hidden"}`}>No matching results found.</div>                          
            {props.searchResults && (props.searchResults.length > 0) && props.searchResults.slice(0,7).map(result =>  (
                <SearchResult key={result.id} result={result} setShowResults={props.setShowResults}/>
            ))}                 
            <div className={`full-results ${props.searchResults.length > 7 ? "" : "hidden"}`} onClick={handleClicksFullResults}>View all {props.searchResults.length} results</div>
        </div>
    )
}

export default SearchResultList