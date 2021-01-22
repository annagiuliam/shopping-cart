import React  from 'react';
import  {HashRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';



const App = () => {   

    return (        
        <HashRouter basename='/'>         
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' component={Shop} />
                <Route path='/checkout' component={Checkout} />
            </Switch>            
        </HashRouter> 
        
    )
}

export default App;