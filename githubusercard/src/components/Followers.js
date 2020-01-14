import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'

let array = []
console.log('asdasd', array)

class Followers extends React.Component {
    state = {
            followers: []
        };
      
    

    // componentDidMount() {
    //     axios
    //         .get('https://api.github.com/users/dustinmyers/followers')
    //         .then(res => {
    //             this.setState({
    //                 followers: res.data
    //             });
    //             console.log('fogggy', res);
    //         })
    //         .catch(err => console.log(err));
    // }

    componentDidMount(prevState) {
        axios
            .get('https://api.github.com/users/dustinmyers/followers')
            .then(res => {
                for (let i = 0; i < res.data.length; i++){
                    array.push(res.data[i])
                }

               
                // array.forEach((item) => {
                //     axios.get(`https://api.github.com/users/${item}`)
                //     .then(res => {
                //         this.setState({
                //             followers: [ res.data]
                //         })
                //     })
                // })

                 this.setState({
                  followers: array
                 });
                console.log('fogggy', res);
            })
            .catch(err => console.log(err));
    }
   
    render() {
        console.log("app is rendering");
        return (
            <div className="App">
                {this.state.followers.map(follower => (
                    <UserCard user={follower} />
                ))}

            </div>
        );
    }
}

export default Followers
