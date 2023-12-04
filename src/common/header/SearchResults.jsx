import React from 'react'

const SearchResults = ({ results, onItemClick }) => {
    return (
            <div className="search-results">
            <ul>
                {results.map((result) => (
                    <li key={result.id} onClick={() => onItemClick(result)}>
                        {result.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResults
