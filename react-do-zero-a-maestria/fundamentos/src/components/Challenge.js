const Challenge = ({numberA, numberB}) => {
    
    const handleSum = () => {
        console.log(Number(numberA) + Number(numberB));
    }

    return (
        <div>
            <h2>{numberA} + {numberB}</h2>
            <button onClick={handleSum}>Clique aqui</button>
        </div>
    );
}

export default Challenge;