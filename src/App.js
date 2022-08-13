import Navbar from './componentes/Navbar'
import Hero from './componentes/Hero'
import Card from './componentes/Card'
import cardsData from './data'

function App() {
  const cards = cardsData.map((card) => {
    return <Card key={card.id} {...card} />
  })
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Hero />
        <div className='cards-overlay'>
          <div className='cards'>
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
