const Bonjour = function(props) {
    const { name, age, ageVisible } = props

    return (
        <div>
            <h1>Bonjour {name} sur l'application React</h1>
            {
                ageVisible ? (
                    <p>Vous avez {age} ans !</p>
                ) : (
                    <p>Age caché</p>
                )
            }
            {
                (age < 18) && (
                    <p>Mineur</p>
                )
            }
            
        </div>
    )
}

Bonjour.defaultProps = {
    age: 18,
    ageVisible : true
}

export default Bonjour