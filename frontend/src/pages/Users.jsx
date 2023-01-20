import React, { useCallback, useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import SearchField from '../components/SearchField';
import UserList from '../components/UserList';
import useFetch from '../hooks/useFetch';
import randomUserApi from '../services/randomUserApi';

const ITEMS_PER_PAGE = 10;
const AWAIT = 1000;
let timer = null;

function Users() {
  const [search, setSearch] = useState('');
  const { data, isLoading } = useFetch(randomUserApi);
  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [firstItemIndex, setFirstItemIndex] = useState(0);
  const [lastItemIndex, setLastItemIndex] = useState(filteredData.length - 1);

  useEffect(() => {
    let lastIndex = currentPage * ITEMS_PER_PAGE;
    if (lastIndex > filteredData.length) lastIndex = filteredData.length;

    setTotalPageCount(Math.ceil(filteredData.length / ITEMS_PER_PAGE));
    setFirstItemIndex(lastIndex - ITEMS_PER_PAGE);
    setLastItemIndex(lastIndex);
  }, [currentPage, filteredData.length]);

  const filterBySearch = useCallback((value) => (
    data.filter(({ name, email, login }) => {
      const regex = new RegExp(value, 'i');
      return (regex.test(`${name.first} ${name.last}`)
      || regex.test(email)
      || regex.test(login.username));
    })
  ), [data]);

  useEffect(() => {
    clearTimeout(timer);
    if (search.length > 0) {
      timer = setTimeout(() => {
        console.log(filterBySearch(search));
        setFilteredData(filterBySearch(search));
      }, AWAIT);
    } else {
      setFilteredData(data);
    }
  }, [search, data, filterBySearch]);

  if (isLoading) return ('IS LOADING...');

  return (
    <div>
      <SearchField search={ search } setSearch={ setSearch } />
      <UserList data={ filteredData.slice(firstItemIndex, lastItemIndex) } />
      { totalPageCount > 1 && (
        <Pagination
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          totalPageCount={ totalPageCount }
        />
      )}
    </div>
  );
}

export default Users;
