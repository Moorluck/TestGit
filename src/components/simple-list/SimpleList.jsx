import SimpleListItem from "./SimpleListItem"

const SimpleList = function(props) {
    const { pokemons } = props

    const pokemonsJSX = pokemons.map(
        p => <SimpleListItem key={p.id}
                name={p.name}
                type={p.type}
                level={p.level}></SimpleListItem>
    )
    // [<li key=1>Salameche : Feu</li>,
    //  <li key=1>Carapuce : Eau</li>,
    //  <li key=1>Bulbizarre : Plante</li>]

    return (
        <div>
            {pokemonsJSX}
        </div>
    )
}

export default SimpleList