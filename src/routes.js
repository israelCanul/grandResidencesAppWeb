import React from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './components/app';// aplicacion padre
import Index from './components/index';
import MenuPrincipal from './components/menu-principal';


//<Route path="/listPrincipalItems" component={ListPrincipalItems} />
export default(
  <Route path="/guest-services/" component={App} >
    <IndexRoute component={Index}/>
    <Route path="/guest-services/intro.html" component={MenuPrincipal} />
  </Route>
);
