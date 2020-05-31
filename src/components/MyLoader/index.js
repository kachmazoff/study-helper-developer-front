import React from 'react'
import Loader from 'react-loader-spinner'

function MyLoader({ type, color, height, width }) {
  return(
    <Loader
      type={ type }  
      color={ color }
      height={ height }
      width={ width }
   />
  );
}

MyLoader.defaultProps = {
  type: "Oval",
  color: "#4E57AA",
  height: 50,
  width: 50
}

export default MyLoader