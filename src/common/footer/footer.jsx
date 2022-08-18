import paymentIcon from '../../assets/payment.png';
import paypal from '../../assets/paypal.png';
import rayban from '../../assets/rayban.jpg';
import '../footer/footer.scss';

export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-left'>
                <div className='we-accept'>We Accept</div>
                <div className='payment-icon'>
                    <img src={paymentIcon} alt="payment icon" />
                    <img src={paypal} alt="paypal" />
                </div>
            </div>

            <div className='footer-right'>
                <img src={rayban} alt="rayban" />
            </div>
        </div>
    )
}