import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return(
      <div>
        <Layout>
          <Switch>
{/* history props are only available to the directly routed components /containers */}
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />

          </Switch>

        </Layout>

      </div>
    )
  }
}
// https://burger-5f281-default-rtdb.firebaseio.com/
export default App;
