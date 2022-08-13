import star from '../images/star.png';

export default function Navbar({img, status, grade, location, desc, price, reviews}) {
    return (
        <div className="card">
            <div className='card--visualization'>
                <img className='card--image' src={img} />
                <span className='card--status'>{status}</span>
            </div>
            <div className='card--info'>
                <img className='card--info--star' src={star} />
                <span className='card--grade'>{grade}</span>
                <span>({reviews}) •</span>
                <span>{location}</span>
            </div>
            <p className='card--desc'>{desc}</p>
            <p><b>From {price}</b> / person</p>
        </div>
    )
}