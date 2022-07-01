import proj1 from '../../images/flight.jpg'
import proj2 from '../../images/proj5.jpg'
import proj3 from '../../images/proj3.jpg'
import proj4 from '../../images/proj4.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Project(){
    return (
    <>
    <div className='card-container'>
        <div className="card" style={{ width: "40%"}} >
            <img src={proj1} className="card-img-top"  alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="https://johnnycarpio.github.io/flight-weather-app/"> Flight Weather App</a></h5>
              <h1 className="card-text"><a href=" https://github.com/johnnycarpio/flight-weather-app"><i className="bi bi-github"></i></a></h1>            </div>
        </div>
        <div className="card" style={{ width: "40%" }} >
            <img src={proj4} className="card-img-top"  alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="https://guarded-bayou-92967.herokuapp.com/">Meme-ories</a></h5>
              <h1 className="card-text"><a href="https://github.com/jlemuz/meme-ories"><i className="bi bi-github"></i></a></h1>
            </div>
        </div>
        <div className="card" style={{ width: "40%" }} >
            <img src={proj2}  className="card-img-top"  alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="https://sleepy-meadow-10807.herokuapp.com/">WanderLust App</a></h5>
              <h1 className="card-text"><a href="https://github.com/ArbiNazari/WanderLust.git"><i className="bi bi-github"></i></a></h1>            
            </div>
        </div>
        <div className="card" style={{ width: "40%" }} >
            <img src={proj3} style={{ width: "90%" }}  className="card-img-top"  alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="https://github.com/jlemuz/weather-report-app.git">Weather Dashboard</a></h5>
              <h1 className="card-text"><a href="https://jlemuz.github.io/weather-report-app/"><i className="bi bi-github"></i></a></h1>
            </div>
        </div>
    </div>
    </>
    )
}
