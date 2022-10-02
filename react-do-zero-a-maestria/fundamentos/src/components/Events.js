const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        }
        return <h1>Também renderizo isso!!!</h1>
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
}

export default Events;