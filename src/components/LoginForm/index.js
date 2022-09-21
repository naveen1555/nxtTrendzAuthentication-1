import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showSubmitError: false,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <div className="form-input-container">
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          value={username}
          onChange={this.onChangeUsername}
          id="username"
          className="input-box"
          placeholder="Username"
        />
      </div>
    )
  }

  renderUserPassword = () => {
    const {password} = this.state

    return (
      <div className="form-input-container">
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          onChange={this.onChangePassword}
          id="password"
          className="input-box"
          placeholder="Password"
        />
      </div>
    )
  }

  render() {
    const {errorMessage, showSubmitError} = this.state
    return (
      <>
        <div className="login-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="app-logo-image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="large-app-logo-image"
            />
            <div>{this.renderUserName()}</div>
            <div>{this.renderUserPassword()}</div>
            <button type="submit" className="submit-btn">
              Login
            </button>
            {showSubmitError && <p className="error-msg">{errorMessage}</p>}
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
