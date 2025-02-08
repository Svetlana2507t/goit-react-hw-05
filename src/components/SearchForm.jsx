import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
