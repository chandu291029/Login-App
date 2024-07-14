// Write your code here
import './index.css'

const Login = props => {
  const {onlogin} = props
  return (
    <button onClick={onlogin} type="button" className="button">
      Login
    </button>
  )
}
export default Login
