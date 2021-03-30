

function ExoTrois(props) {

    return(
        <div>
            <h2>Exercice 3</h2>
            <input type="text" onCopy={(e) => {props.copy(e)}}/>
        </div>
    );
}


export default ExoTrois;