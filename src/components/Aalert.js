import React from 'react'

function Aalert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        this is  {props.title}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    </div>
  )
}

export default Aalert