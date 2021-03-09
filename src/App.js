import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return(
      <div>
        <h1>Welcome to Build Your Own Burger Station</h1>
        <Layout>

          <BurgerBuilder/> 
          
        </Layout>

      </div>
    )
  }
}

export default App;
