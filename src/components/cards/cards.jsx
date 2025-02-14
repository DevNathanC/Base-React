import Card from "../card/card";

const cardsTitle = ['Title Card 1', 'Title Card 2', 'Title Card 3'];

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>

            <div>
                {cardsTitle.map((cardTitle, index) => (
                        <Card key={index}>
                            <h3>{cardTitle}</h3>
                            <p>Texto do card 1</p>
                        </Card>
                    )
                )}
            </div>
        </div>
    );
}

export default Cards;