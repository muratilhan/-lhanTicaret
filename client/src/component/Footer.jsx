import React from 'react'
import '../styles/footer.css'
function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-left">
            
            <h3><b>Murat ilhan</b></h3>
            <p> Uzun süredir e-ticaret üzerinden satışlar gerçekleştirmekteyiz. Ürünlerimiz gerçekten kalitelir ayrıca memnun olmadığınız bir durumla karşılaşırsanız mail yoluyla şikayetlerinizi veya taleplerinizi belirtebilirsiniz. İyi Günler Dilerim.. </p>
           
            <div className='footer-left-icons'>
                <i class="fa-brands fa-facebook footer-icon"></i>
                <i class="fa-brands fa-instagram footer-icon"></i>
                <i class="fa-brands fa-twitter footer-icon"></i>
                <i class="fa-brands fa-twitch footer-icon"></i>
            </div>
        </div>
        <div className="footer-mid">
            <h4><b>Useful Links</b></h4>
            <ul className="footer-ul">
                { ["Home","Man Fashion", "Order Tracking", "wishlist", "Cart", "Woman Fashion", "My Account", "Wishlist", "Terms"]
                .map(item => (
                    <li className='footer-li'> {item} </li>
                )) }
            </ul>
        </div>
        <div className="footer-right">
            <h4><b>Contact</b></h4>
            <div className="contact-infos">
                <div className="contact-info">
                    <i class="fa-solid fa-location-dot"></i>
                    <div className='info-div'>Bursa - Nilüfer / İnegöl</div>
                </div>
                <div className="contact-info">
                    <i class="fa-solid fa-phone"></i>
                    <div className='info-div'>0224 885 88 88</div>
                </div>
                <div className="contact-info">
                    <i class="fa-solid fa-envelope"></i>
                    <div className='info-div'>murattilhann08@gmail.com</div>
                </div>
            </div>
            <div className='footer-cards'>
                <i class="fa-brands fa-cc-mastercard credit-card"></i>
                <i class="fa-brands fa-cc-paypal credit-card"></i>
                <i class="fa-brands fa-cc-visa credit-card"></i>
                <i class="fa-brands fa-cc-discover credit-card"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer