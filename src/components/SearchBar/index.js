import React, { useContext } from 'react';
import { Context } from '../../context/HospitalContext';

import { Form } from './style';

const SearchBar = () => {
  const { handleHospitalNames, value, setValue } = useContext(Context);

  return (
    <Form method="post" onSubmit={handleHospitalNames}>
      <input
        type="text"
        placeholder="Pesquisar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;
