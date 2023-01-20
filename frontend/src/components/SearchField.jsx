import PropTypes from 'prop-types';
import SearchIcon from '../assets/icons/SearchIcon';

function SearchField({ search, setSearch }) {
  return (
    <label
      htmlFor="search"
      className="rounded-lg bg-gray-100 border-2
        border-gray-200 flex items-center"
    >
      <input
        type="text"
        id="search"
        className="px-2 py-1.5  grow bg-inherit focus:outline-none"
        placeholder="Search"
        value={ search }
        onChange={ ({ target }) => { setSearch(target.value); } }
      />
      <SearchIcon />
    </label>
  );
}

SearchField.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchField;
