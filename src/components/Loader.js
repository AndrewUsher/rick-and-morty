import React from 'react'
import { PropagateLoader } from 'react-spinners'

const Loader = props => (
  <div className="Loader">
    <PropagateLoader size={25} />
  </div>
)

export default Loader
