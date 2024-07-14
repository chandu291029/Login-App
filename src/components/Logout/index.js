// Write your code here
import './index.css'

const Logout = props => {
  const {onlogout} = props

  return (
    <button onClick={onlogout} type="button" className="button">
      Logout
    </button>
  )
}
export default Logout
