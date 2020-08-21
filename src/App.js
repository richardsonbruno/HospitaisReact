import React from 'react';
import GlobalStyle from './global/style';

import { HospitalContext } from './context/HospitalContext';

// Components
import SearchBar from './components/SearchBar';
import HospitalList from './components/HospitalList';

function App() {
  return (
    <div className="container">
      <HospitalContext>
        <SearchBar />
        <HospitalList />
        <GlobalStyle />
      </HospitalContext>
    </div>
  );
}

export default App;
