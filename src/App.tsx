import React from 'react';

import './App.css';
import Login from './Login';
import Main from './Main';

interface State {
  isLoggedIn: boolean;
  user_name: string;
}

interface Props {}

export default class App extends React.Component<Props, State> {
  state: State = {
      isLoggedIn: false, 
      user_name: "",
  }
  set_user = (name: string) => {
      this.setState({isLoggedIn:true, user_name:name})
  }
  render()  {
      if (this.state.isLoggedIn) {
          return <Main username={this.state.user_name}/>;
      }
      return <Login parent={this.set_user}/>;
  }
}
