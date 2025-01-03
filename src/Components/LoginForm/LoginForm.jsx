import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" name="username" placeholder="Username" required />
      </div>

      <div className="input-box">
        <input type="text" name="password" placeholder="Passsword" required/>
      </div>
    
    <div className="rember-forgot">
      <label><input type ="checkbox" />Remember me</label>
    <a href="#">Forgot Password?</a>
    </div>

    <button type="submit">Login</button>

    <div className="register-link">
      <p>Dont have an account? <a href="#">Register Here</a></p>
    </div>
    </form>
    </div>
  )
}

export default LoginForm ;