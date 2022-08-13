import gridImage from '../images/photo-grid.png';

export default function Navbar() {
    return (
        <section className='hero'>
            <img src={gridImage} />
            <div>
                <h1 className='hero--title'>Online Experiences</h1>
                <p className='hero--text'>
                    Join unique interactive activities led by one-of-a-kind 
                    hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}