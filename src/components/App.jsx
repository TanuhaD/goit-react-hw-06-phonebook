import React from 'react';
import { Contacts, Filter, FormAddContact } from './';

export const App = () => {
  return (
    <div>
      <FormAddContact />
      <Contacts>
        <Filter />
      </Contacts>
    </div>
  );
};

export default App;
