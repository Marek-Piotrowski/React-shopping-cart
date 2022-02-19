import Logo2 from '../../assets/logo-black-1.svg'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-contact-info">
        <img src={Logo2} alt="logo" width="102" height="50" />
        <a href="555-555-555">555-555-555</a>
        <a href = "mailto: mail@mail.com">MAIL@MAIL.COM</a>
        <p>SOSNOWIEC, PO ZMROKU 44</p>
        <span>Copyright&copy10a.io</span>
      </div>
      <div className='footer-wrapper'>
      <div className='footer-sitemap'>
        <ul>
          <li className='footer-sitemap-heading'>MAPA STRONY</li>
          <li><hr className='footer-line'/></li>
          <li><a href="#">STRONA GłOWNA</a></li>
          <li><a href="#">OFERTA</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">KONTAKT</a></li>
        </ul>
      </div>
      <div className='footer-products'>
        <ul>
            <li className='footer-products-heading'>PRODUKTY</li>
            <li ><hr className='footer-line'/></li>
            <li className='footer-products-list'><a href="#">MYSZKI A</a></li>
            <li><a href="#">MYSZKI B</a></li>
            <li><a href="#">MYSZKI C</a></li>
          </ul>
      </div>
      </div>


    </footer>
  )
}

export default Footer