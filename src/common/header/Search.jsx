import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SearchResults from './SearchResults';

const Search = ({ cartItem, searchProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search.classList.toggle('active', window.scrollY > 100);
  });

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Perform search and update searchResults
    const results = term ? searchProducts(term) : [];
    setSearchResults(results);
  };

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <span className='clear-search' onClick={() => setSearchTerm('')}>
                Clear
              </span>
            )}
            <span>All Category</span>
          </div>
          {searchResults.length === 0 &&
            <>
              <div className='icon f_flex width'>
                <Link to='/user'>
                  <i className='fa fa-user icon-circle'></i>
                </Link>
                <div className='cart'>
                  <Link to='/cart'>
                    <i className='fa fa-shopping-bag icon-circle'></i>
                    <span>{cartItem.length === 0 ? '' : cartItem.length}</span>
                  </Link>
                </div>
              </div>
              
            </>
          }





        </div>

        {/* <div className="search-box-result">
            {searchResults.length > 0 && (
              <div className='search-results'>
                <ul>
                  {searchResults.map((result) => (
                    <li key={result.id}>{result.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div> */}
      </section>
      <section>
        <div className="search-result f_flex">
          <SearchResults results={searchResults} />
        </div>
      </section>


    </>
  );
};

export default Search;
