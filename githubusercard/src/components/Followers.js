import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'

let array = []
// let array2 = []
// console.log('asdasd', array)

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

    componentDidMount() {
        axios
            .get('https://api.github.com/users/oakes680/followers')
            .then(res => {
                for (let i = 0; i < res.data.length; i++){
                    array.push(res.data[i].login)
                }

                array.forEach((item) => {
                    axios.get(`https://api.github.com/users/${item}`)
                    .then(res => {
                        this.setState({
                            followers: [...this.state.followers, res.data] 
                           });
                        
                        console.log('monkey', res.data)
                        // for (let i = 0; i < res.data.length; i++){
                            
                        // }
                    })
                })
                
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
