import React, { useContext } from 'react';
import { Container } from './style';

import HospitalItem from '../HospitalItem';
import { Context } from '../../context/HospitalContext';

const HospitalList = () => {
  const { listHospital, loading } = useContext(Context);

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        listHospital.map(hospital => (
          <HospitalItem
            key={hospital.cdUnimed}
            name={hospital.nmUnimed}
            site={hospital.site}
            phone={hospital.telefone}
            address={`${hospital.endereco} ${hospital.cidade}`}
          />
        ))
      )}
    </Container>
  );
};

export default HospitalList;
