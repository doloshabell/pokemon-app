import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="container-fluid fixed-top bg-white pb-3 mb-3 border-bottom border-5">
        <div className="row text-center">
          <h1 className="mt-2">Pokemon</h1>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-4 col-sm-1 text-end border border-2 rounded rounded-pill me-1">
            <Link to={"/"} className="text-decoration-none text-black">
              Pokemon List
            </Link>
          </div>
          <div className="col-4 col-sm-1 border border-2 rounded rounded-pill ms-1">
            <Link to="#" className="text-decoration-none text-black">
              My Pokemon
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar