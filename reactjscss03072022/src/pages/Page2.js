import '../styles/Style1.css';
import kebab from '../images/kebab.jpg'
import elden from '../images/elden.jpg'
import techies from '../images/techies.png'


const Page2 = () =>{
    return(
        <>
        <div className="container-fluid section2">
            <h1 className='pt-3 pb-3'>My Sunday</h1>
             <div className='row'>
                 <div className='col-12'>
                 <div className="card" >
                    <img className="card-img-top" src={techies} alt="Karaoke"/>
                    <div className="card-body">
                        <h3>Played Dota 2</h3>
                        <p className="card-text">I sleptover at my friend's house along with my other friends to play Dota 2 all night.</p>
                    </div>
                    </div>
                </div>
                <div className='col-12'>
                <div className="card" >
                    <img className="card-img-top" src={kebab} alt="Ramen"/>
                    <div className="card-body">
                        <h3>Made Kebab</h3>
                        <p className="card-text">We cooked our own dinner and made kebabs. Our friend taught us how to make these, and I can say that I can now cook this in my own home.</p>
                    </div>
                    </div>
                </div>
                <div className='col-12'>
                <div className="card" >
                    <img className="card-img-top" src={elden} alt="picture"/>
                    <div className="card-body">
                        <h3>Played Elden Ring</h3>
                        <p className="card-text">Me and my friend bought elden ring, which is a really famous game now. It is like a dark souls game where it is really difficult.</p>
                    </div>
                    </div>
                </div>
             </div>
        </div>
        </>
    );
}

export default Page2