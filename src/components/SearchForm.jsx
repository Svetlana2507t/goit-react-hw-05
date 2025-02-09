import { useState } from 'react';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <label htmlFor="input" className={s.inputLabel}>
        Search:
      </label>
      <input
        type="text"
        id="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        className={s.inputField}
      />
      <button type="submit" className={s.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
