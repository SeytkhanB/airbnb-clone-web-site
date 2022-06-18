

import './app-style.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Card from './Card/Card'
import Data from './Data'


export default function App() {

    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <main className='app'>
            <Navbar />
            <Hero />
            <section className='cards-list'>
                {cards}
            </section>
        </main>
    );
}

