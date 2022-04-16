/* eslint-disable react/jsx-filename-extension */
import { Routes as Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home/Index';
import { NewContact } from './pages/NewContact/Index';
import { EditContact } from './pages/EditContact/Index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" index element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Switch>
  );
}
