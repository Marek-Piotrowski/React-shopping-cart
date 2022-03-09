import Logo2 from '../../assets/logo-black-1.svg'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-contact-info">
        <img src={Logo2} alt="logo" width="102" height="50" />
        <a href="+44 141 420 5000">+44 141 420 5000</a>
        <a href = "mailto: mail@mail.com">MAIL@MAIL.COM</a>
        <p>N Hanover St,GLASGOW, UK</p>
        <span>Copyright&company.com</span>
      </div>
      <div className='footer-wrapper'>
      <div className='footer-sitemap'>
        <ul>
          <li className='footer-sitemap-heading'>SITEMAP</li>
          <li><hr className='footer-line'/></li>
          <li><a href="#">MAIN PAGE</a></li>
          <li><a href="#">OFFERS</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
      <div className='footer-products'>
        <ul>
            <li className='footer-products-heading'>PRODUCTS</li>
            <li ><hr className='footer-line'/></li>
            <li className='footer-products-list'><a href="#">MOUSES A</a></li>
            <li><a href="#">MOUSES B</a></li>
            <li><a href="#">MOUSES C</a></li>
          </ul>
      </div>
      </div>


    </footer>
  )
}

export default Footer