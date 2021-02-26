import React from 'react';
import GlobalStyle from './global/style';

import { HospitalContext } from './context/HospitalContext';

// Components
import HospitalList from './components/HospitalList';

function App() {
  return (
    <div className="container">
      <HospitalContext>
        <HospitalList />
        <GlobalStyle />
      </HospitalContext>
    </div>
  );
}

export default App;
