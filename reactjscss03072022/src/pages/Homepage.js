import '../styles/Style1.css';
import wfh from '../images/wfh.png'

const Homepage = () =>{
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <div className="jumbotron pt-5">
                        <img src={wfh} className="img-fluid mx-auto d-block" alt="Me myself"/>
                        <h1>Mark Christopher Ramirez</h1>
                    </div>
                </div >
            </div>
        
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <p className='jumboP'>
                        Hi! I am a 4th Year BSIT Student from University of the East. I am an intern in TELUS International Philippines Inc. I joined the Full-Stack Development team to further enhance my programming skills and challenge myself. I can say that I'm really challenged right now. I enjoy my weekend by doing things i love. Like playing video games and going to friends. Check the other tabs of the website to know how my past weekend went.
                    </p>
                </div>
                </div>
        </div>
        </>
    );
}

export default Homepage