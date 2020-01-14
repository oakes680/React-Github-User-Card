import React from "react";
import axios from 'axios'
import UserCard from './components/UserCard'

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
        // res.data.message
        this.setState({
          user: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  

  render() {
    //render things to the dom
    console.log("app is rendering");
    return (
      <div className="App">
        <UserCard user={this.state.user}  />
      </div>
    );
  }
}

export default App;
