import cartLogo from '../../assets/supermarket-basket.svg'

function Cart() {
  return (
    <div className='cart-conatiner'>
      <div className="cart">
        <img src={cartLogo} alt="Cart Logo" />
      </div>
      {/* dodaj/usun klase active aby widziec koszyk */}
      <span className='cart-sum active'>1</span>
    </div>
  )
}

export default Cart