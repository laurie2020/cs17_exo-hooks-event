

function ExoUn(props) {
    return(
        <div>
            <h2>Exercice 1</h2>
            <h3>Vous avez cliqué {props.count} fois</h3>
            <button onClick={() => {props.increment()}}>+1</button>
        </div>
    );
}


export default ExoUn