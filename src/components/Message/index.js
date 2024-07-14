// Write your code here
import './index.css'

const Message = props => {
  const {isuserlogin} = props
  return isuserlogin ? 'welcome user' : 'pleace login'
}
export default Message
