import logo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
            <div className='container'>
                <img src={logo} />
            </div>
        </nav>
    )
}