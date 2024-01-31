import './Login.css';

const Login = () => {
  return (
    <div>
        <body>
  <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src="https://giphygifs.s3.amazonaws.com/media/50ErBtiJeiwo/giphy.gif" alt=""/>
        <div className="text">
          
        </div>
      </div>
      <div className="back">
        <img className="backImg" src="" alt=""/>
        <div className="text">
          <span className="text-1">Complete miles of journey <br/> with one step</span>
          <span className="text-2">Lets get started</span>
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title"> ➡️ LOGIN HERE</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="ENTER YOUR EMAIL ID HERE" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="ENTER YOUR PASSWORD HERE" required/>
              </div>
              <div className="text"><a href="#">FORGOT PASSWORD ?</a></div>
              <div className="button input-box">
                
                <input type="submit" value="CLICK HERE TO SUBMIT"/>
              </div>
              <div className="text sign-up-text">Don't have an account ? <label htmlFor="flip">SIGN UP</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">SIGN UP HERE ⬇️</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="ENETR YOUR NAME" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="ENTER YOUR EMAIL ID" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="ENTER YOUR PASSWORD" required/>
              </div>
              <div className="button input-box">
                <input type="submit" value="CLICK HERE TO SUBMIT"/>
              </div>
              <div className="text sign-up-text">Already have an account ? <label htmlFor="flip">LOGIN</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
</body>
    </div>
  )
}

export default Login