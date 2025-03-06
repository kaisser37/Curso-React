import PropTypes from 'prop-types';


export const FirstApp = ( {title, subtitle} ) => {

    return (
        <>
            <h1> { title } </h1>   
            {/* imprimir un objeto en formato JSON --> <code> { JSON.stringify( newMessage ) } </code>     */}  
            <p> { subtitle + 1 } </p>
        </>
    );

}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}