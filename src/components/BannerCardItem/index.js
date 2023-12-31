// Write your code here.
import './index.css'

const Banner = props => {
  const {bannerdet}=props
  const {className, headerText, description} = bannerdet
  return (
    <li className={`${className}`}>
      <h1 className="head">{headerText}</h1>
      <p className="par">{description}</p>
      <button className="btn">"Show More"</button>
    </li>
  )
}

export default Banner
