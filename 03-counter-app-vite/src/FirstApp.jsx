const getMessage = (a, b) => {
    return a + b ;
}

export const FirstApp = () => {
    return (
        <>
            <h1> { getMessage(1, 10) } </h1>         
            <p>soy un subtitulo </p>
        </>
    );

}