import React from 'react'
import { FaTimes } from 'react-icons/fa';

function Cart({setshowCart}) {

const handleClose = () =>{
    setshowCart(false)
}

  return (
    <div>
        <FaTimes style={{width:"23px",height: "23px"}} onClick={handleClose}/>
        <div>
        Here will be your products listed.....
        </div>

    </div>
  )
}

export default Cart