import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-main-container">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="small-home-image"
        />
        <p className="content">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes always been a marker of the era and we
          are in a revolution. Your Fashion makes you been seen and heard that
          way you are. So, celebrate the seasons new and exciting fashions in
          your own way.
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="large-home-image"
      />
    </div>
  </>
)

export default Home
