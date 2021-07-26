import React from "react"
import SearchResult from "./SearchResult"

const SearchResultList = (props) => {

    console.log(props.searchResults);

    return (
        <div className="" className={`search-result-box ${props.show ? "" : "hidden"}`}>
            <div>Matching results: {props.searchResults ? props.searchResults.length : "0"}</div>                            
            {props.searchResults && (props.searchResults.length > 0) && props.searchResults.map(result =>  (
                <SearchResult key={result.id} result={result}/>
            ))}     
        </div>
    )
}

export default SearchResultList