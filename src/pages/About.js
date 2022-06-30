import coverImage from '../images/jlemuz.jpg'

export default function About(){
    return (
        <section className="about">
          <h1>Who am I?</h1>
          <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
          <div className="my-2">
            <p>
            Jose Lemuz is a Professional Engineer in the State of California with a specialization in Computer and Power Systems.
            He specializes in software development, electrical design, and is a General Contractor. He has experience working with a 
        corporate database systems, embedded architectures and full-stack web development
            </p>
          </div>
        </section>
      );
    }