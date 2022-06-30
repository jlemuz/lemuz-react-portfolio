import {Link} from 'react-router-dom';

export default function Nav(){
    return <nav className="nav">
        <Link to="/" className="site-title"> Jose Lemuz</Link>
        <ul>
            <li>
                <Link to="about">About Me</Link>
            </li>
            <li>
                <Link to="portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
            <li>
                <Link to="resume">Resume</Link>
            </li>
        </ul>

    </nav>
}
