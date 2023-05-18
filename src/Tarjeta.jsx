/** Componente funcional que representa una tarjeta */
/** Me gustaría poder configurar el titulo h2 de esta tarjetra y su descripción */
/** Por convección, le llamamos a la variable que contiene todas las propiedades que nos pasan 'props' */
function Tarjeta(props) {
    console.log('Props que le pasamos: ', props);
    return <div>
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>
    </div>
}

export default Tarjeta;