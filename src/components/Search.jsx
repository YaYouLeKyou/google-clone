import React, { useEffect, useState } from 'react';
import { Links } from './Links';
import { useDebounce } from 'use-debounce';
import { useStateContext } from '../contexts/ResultContextProvider';

export const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState('Elon Musk');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  
  return (
      <div className="search">
      <input
        value={text}
        type="text"
        className="search2 sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="btn absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      <Links />
    </div>
  )
}

export default Search
