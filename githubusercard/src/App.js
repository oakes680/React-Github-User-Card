import React from "react";
import axios from 'axios'
import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {
  constructor() {   
    super();
    this.state = {
      user: []
    };
    console.log("Constructor is running");
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/dustinmyers')
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));    
  }


  render() {
    console.log("app is rendering");
    return (
      <div className="App">
        <UserCard user={this.state.user}  />
        <Followers/>
      </div>
    );
  }
}

export default App;
