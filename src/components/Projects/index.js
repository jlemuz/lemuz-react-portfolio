import proj1 from '../../images/flight.jpg'
import proj2 from '../../images/proj5.jpg'
import proj3 from '../../images/proj3.jpg'
import proj4 from '../../images/proj4.jpg'
export default function Project(){
    return (
    <>
    <div className='card-container'>
        <div class="card" style={{ width: "40%"}} >
            <img src={proj1} class="card-img-top"  alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card" style={{ width: "40%" }} >
            <img src={proj4} class="card-img-top"  alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card" style={{ width: "40%" }} >
            <img src={proj2}  class="card-img-top"  alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card" style={{ width: "40%" }} >
            <img src={proj3} style={{ width: "90%" }}  class="card-img-top"  alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    </>
    )
}
