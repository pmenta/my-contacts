/* eslint-disable react/jsx-filename-extension */
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home/Index';
import { NewContact } from './pages/NewContact/Index';
import { EditContact } from './pages/EditContact/Index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" exact component={NewContact} />
      <Route path="/edit/:id" exact component={EditContact} />
    </Switch>
  );
}
