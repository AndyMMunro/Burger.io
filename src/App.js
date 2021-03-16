import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return(
      <div>
        <Layout>
        
          <BurgerBuilder/> 
          
        </Layout>

      </div>
    )
  }
}
// https://burger-5f281-default-rtdb.firebaseio.com/
export default App;
