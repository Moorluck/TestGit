import "./Welcome.css"

const Welcome = function(props) {
    // Logique du composant
    const { name, lastname } = props

    //Equivalent
    // const name = props.name
    // const lastname = props.lastname

    // Rendu du composant
    return (
        <div>
            <h1 className="bonjour">Bonjour {name.toUpperCase()} {lastname}</h1>
            <p></p>
        </div>    
    )
}

Welcome.defaultProps = {
    name: "Paul"
}

export default Welcome