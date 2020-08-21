import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export function HospitalContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [listHospital, setListHospital] = useState(() => {
    setLoading(true);
    const list = localStorage.getItem('@Escala:listHospital');

    if (list) {
      setLoading(false);
      return JSON.parse(list);
    }

    return [];
  });

  function handleHospitalNames(event) {
    event.preventDefault();
    setLoading(true);

    const search = listHospital.filter(
      element => element.nmUnimed.toLowerCase().indexOf(value.toLowerCase()) > -1,
    );
    setValue('');
    setListHospital(search);
    localStorage.setItem('@Escala:listHospitals', JSON.stringify(search));
    setLoading(false);
  }

  useEffect(() => {
    fetch('https://api.unimed.coop.br/unimed/v3/unimeds/')
      .then(res => res.json())
      .then((res) => {
        setLoading(true);
        localStorage.setItem('@Escala:listHospitals', JSON.stringify(res));
        setListHospital(res);
        setLoading(false);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        listHospital,
        loading,
        handleHospitalNames,
        value,
        setValue,
      }}
    >
      {children}
    </Context.Provider>
  );
}
