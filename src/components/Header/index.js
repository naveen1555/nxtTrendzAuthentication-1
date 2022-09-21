import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="small-devices-main-header">
      <div className="small-devices-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="small-devices-app-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt=""
          className="small-devices-logout-button"
        />
      </div>
      <div className="small-devices-options">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="options-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="options-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="options-logo"
        />
      </div>
    </div>
    <div className="container">
      <div className="large-devices-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="large-devices-app-logo"
        />
        <div>
          <ul className="large-devices-options">
            <li className="list">
              <Link to="/" className="link-path">
                Home
              </Link>
            </li>
            <li className="list">
              <Link to="/products" className="link-path">
                Products
              </Link>
            </li>
            <li className="list">
              <Link to="/cart" className="link-path">
                Cart
              </Link>
            </li>
            <button type="button" className="logout-btn">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Header
