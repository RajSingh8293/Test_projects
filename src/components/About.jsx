
import { useState, useEffect } from 'react';
import Card from './Card';


const initialCards = [
    { id: 1, title: 'User 1', time: 1 },
    { id: 2, title: 'User 2', time: 2 },
    { id: 3, title: 'User 3', time: 3 },
];

const About = () => {
    const [cards, setCards] = useState(initialCards);

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    };

    const handleDrop = (e, time) => {
        const id = e.dataTransfer.getData('text/plain');
        const draggedCard = cards.find(card => card.id === Number(id));

        if (draggedCard) {
            setCards(prevCards =>
                prevCards.map(card =>
                    card.id === draggedCard.id ? { ...card, time } : card
                )
            );
        }
    };

    const arrangeCards = () => {
        setCards(prevCards => [...prevCards].sort((a, b) => a.time - b.time));
    };

    useEffect(() => {
        const timer = setInterval(arrangeCards, 5000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className=" flex justify-center flex-col gap-20 mt-16 items-center min-h-[60vh] p-10">
            <div className="flex max-w-[800px] flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-3xl font-bold">About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde ad. Qui exercitationem corporis numquam distinctio vel dicta labore ratione esse eos non, ducimus nisi dolore obcaecati, amet animi modi, itaque velit hic sit commodi voluptatem? Nulla fuga rerum, enim modi fugit temporibus corporis eius non possimus suscipit Error rem maxime eveniet tempore, delectus sequi iusto!</p>
            </div>

            <div>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-4">Draggable Cards</h1>
                    <div
                        className="product-card flex flex-wrap justify-center border-2 p-4"
                        onDrop={(e) => handleDrop(e, 1)}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <h2 className="w-full text-center">1</h2>
                        {cards.filter(card => card.time === 1).map(card => (
                            <Card key={card.id} title={card.title} onDragStart={(e) => handleDragStart(e, card.id)} />
                        ))}
                    </div>
                    <div
                        className=" product-card flex flex-wrap justify-center border-2 p-4 mt-4"
                        onDrop={(e) => handleDrop(e, 2)}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <h2 className="w-full text-center"> 2</h2>
                        {cards.filter(card => card.time === 2).map(card => (
                            <Card key={card.id} title={card.title} onDragStart={(e) => handleDragStart(e, card.id)} />
                        ))}
                    </div>
                    <div
                        className="product-card flex flex-wrap justify-center border-2 p-4 mt-4"
                        onDrop={(e) => handleDrop(e, 3)}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <h2 className="w-full text-center"> 3</h2>
                        {cards.filter(card => card.time === 3).map(card => (
                            <Card key={card.id} title={card.title} onDragStart={(e) => handleDragStart(e, card.id)} />
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About