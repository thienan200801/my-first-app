import '../home-main/home-main.css';
import banner from '../../../assets/banner.png';
import AX from '../../../assets/Brands Logo/AX-min.jpg';
import BB from '../../../assets/Brands Logo/BB-min.jpg';
import Chemi from '../../../assets/Brands Logo/Chemi-min.jpg';
import Rayban from '../../../assets/Brands Logo/Rayban-min.jpg';

export default function Home(){
    return(
        <div className='banner'>
            <div>
                <img src={banner} alt="banner" className='banner-img'/>
                <button className='shopnow-btn'>SHOP NOW</button>
            </div>

            {/* branchs  */}
            <div className='branch-list carousel slide' id="carouselExampleControls" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <img src={AX} alt="ax-min" class="branch-logo"/> 
                    <img src={BB} alt="ax-min" class="branch-logo"/> 
                    <img src={Chemi} alt="ax-min" class="branch-logo"/> 
                    <img src={Rayban} alt="ax-min" class="branch-logo"/> 
                    <img src={AX} alt="ax-min" class="branch-logo"/> 
                    <img src={BB} alt="ax-min" class="branch-logo"/> 
                    <img src={Chemi} alt="ax-min" class="branch-logo"/> 
                    <img src={Rayban} alt="ax-min" class="branch-logo"/> 
                    <img src={AX} alt="ax-min" class="branch-logo"/> 
                    <img src={BB} alt="ax-min" class="branch-logo"/> 
                    <img src={Chemi} alt="ax-min" class="branch-logo"/> 
                    <img src={Rayban} alt="ax-min" class="branch-logo"/> 
                </div>
            </div>
            {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={AX} alt="ax-min" class="d-block w-1"/>                
                    </div>
                    <div class="carousel-item">
                    <img src={BB} alt="BB-min" class="d-block w-10"/>
                    </div>
                    <div class="carousel-item">
                    <img src={Chemi} alt="Chemi-min" class="d-block w-10"/>
                    </div>
                    <div class="carousel-item">
                    <img src={Rayban} alt="Rayban-min" class="d-block w-10"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
            {/* end branches  */}

        </div>
    )
}