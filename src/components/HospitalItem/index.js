import React from 'react';

import { Container } from './style';

import GlobeIcon from '../../assets/icons/globe.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import LocalIcon from '../../assets/icons/local.svg';

const HospitalItem = ({ name, site, phone, address }) => (
  <Container>
    <h1>{name}</h1>
    <div>
      {site && (
        <span>
          <img src={GlobeIcon} alt={`Website: ${site}`} />
          {site}
        </span>
      )}

      {phone && (
        <span>
          <img src={PhoneIcon} alt={`Phone: ${phone}`} />
          {phone}
        </span>
      )}

      {address && (
        <span>
          <img src={LocalIcon} alt={`Phone: ${address}`} />
          {address}
        </span>
      )}
    </div>
  </Container>
);

export default HospitalItem;
