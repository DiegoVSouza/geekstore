import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ActionFigures from './pages/ActionFigures';
import Manga from './pages/Manga';
import Acessories from './pages/Acessories';
import CreateAccount from './pages/CreateAccount';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/actionfigures" component={ActionFigures}/>
      <Route path="/manga" component={Manga}/>
      <Route path="/accessories" component={Acessories}/>
      <Route path="/createaccount" component={CreateAccount}/>
    </Switch>
  );
};

export default Routes;
