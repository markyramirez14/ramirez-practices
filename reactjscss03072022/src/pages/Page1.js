import '../styles/Style1.css';
import karaoke from '../images/karaoke.jpg'
import ramen from '../images/ramen.jpg'
import picture from '../images/picture.jpg'


const Page1 = () =>{
    return(
        <>
        <div className="container-fluid section1">
            <h1 className='pt-3 pb-3'>My Saturday</h1>
             <div className='row'>
                 <div className='col-12'>
                 <div className="card" >
                    <img className="card-img-top" src={karaoke} alt="Karaoke"/>
                    <div className="card-body">
                        <h3>Karaoke</h3>
                        <p className="card-text">Me and my GF went to karaoke hub because we haven't sang in a karaoke in a very long time. </p>
                    </div>
                    </div>
                </div>
                <div className='col-12'>
                <div className="card" >
                    <img className="card-img-top" src={ramen} alt="Ramen"/>
                    <div className="card-body">
                        <h3>Ramen Date</h3>
                        <p className="card-text">We ate at Ippudo Ramen in Vertis North and ordered ramen and maki. </p>
                    </div>
                    </div>
                </div>
                <div className='col-12'>
                <div className="card" >
                    <img className="card-img-top" src={picture} alt="picture"/>
                    <div className="card-body">
                        <h3>Picture Booth</h3>
                        <p className="card-text">We went to a picture booth in Vertis North and we both got a copy of the picture.</p>
                    </div>
                    </div>
                </div>
             </div>
        </div>
        </>
    );
}

export default Page1