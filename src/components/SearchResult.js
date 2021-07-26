import React from "react"

const SearchResult = (props) => {
  return (
    <div className="search-result-item">
        {props.result.title}
    </div>
  )
}
export default SearchResult