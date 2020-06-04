import React, { Component } from 'react';
import Header from './common/header';
import {BrowserRouter,Route} from 'react-router-dom';
import {GlobalStyle} from './style'
import {GlobalStyleFont} from './statics/iconfont/iconfont'
import store from './store'
import {Provider} from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write'


class App extends Component {
  render(){
    return(
      <div>
        <Provider store={store}>
          <GlobalStyle/>
          <GlobalStyleFont/>
          <BrowserRouter>
            <>
            <Header></Header>  
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
            </>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
