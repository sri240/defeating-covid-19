import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#303030`,
            textDecoration: `none`,
            textAlign:"center"
          }}
        >
          <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
         <h1 style={{fontSize:"60px", letterSpacing:"2px", marginTop:"30px", marginBottom:"0px"}}>DEFEATING COVID-19</h1>
         <h2 style={{marginTop:"0px"}}>TOGETHER</h2></div>
        </Link>
      </h1>
          <div style={{textAlign:"center", marginBottom:"-5px"}}>
      <a href="/"><button>HOME</button></a>
      <a href="/contact"><button>CONTACT</button></a>
      <a href="/about"><button>ABOUT</button></a>
      
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
