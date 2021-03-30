

function ExoQuatre(props) {

    return(
        <div>
            <h2>Exercice 4</h2>
            <input type="text" onFocus={(e) => {props.backgroundGreen(e)}} onBlur={(e) => {props.backgroundWhite(e)}}/>
        </div>
    );
}

export default ExoQuatre;