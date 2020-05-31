import React from 'react'
import Loader from 'react-loader-spinner'

function MyLoader() {
  return(
    <Loader
      type="Oval"
      color="#4E57AA"
      height={50}
      width={50}
   />
  );
}

export default MyLoader