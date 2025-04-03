import React, { useState } from 'react'
import './Num.css'

function Num() {
  const [son, setSon] = useState(0)
  const minusHandler = () => {
    if (son != 0) {

      setSon(son - 1)
    }
    else {
      ''
    }
  }
  return (

    <div className='num'>

      <div className="card">

        <div className="card2">

          <button onClick={minusHandler} className="button-3d">
            <div className="button-top">
              <span className="material-icons">❮</span>
            </div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
          </button>
          <h1>{son}</h1>
          <button onClick={() => setSon(son + 1)} className="button-3d">
            <div className="button-top">
              <span className="material-icons">❯</span>
            </div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Num
