// Write your code here
import {Component} from 'react'
import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
    console.log('Clicked')
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClick={this.onClickButton} />
          ) : (
            <Login onClick={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
