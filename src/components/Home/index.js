// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoginn: false}

  toggle = () => {
    this.setState(prevState => ({isLoginn: !prevState.isLoginn}))
  }

  render() {
    const {isLoginn} = this.state
    return (
      <div className="container1">
        <div className="container">
          <Message isuserlogin={isLoginn} className="heading" />

          {isLoginn ? (
            <Logout onlogout={this.toggle} />
          ) : (
            <Login onlogin={this.toggle} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
