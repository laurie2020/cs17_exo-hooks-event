

function ExoDeux(props) {


    return(
        <div>
            <h2>Exercice 2</h2>
            <h3>{props.content}</h3>
            <input 
            type="text"
            onChange={(event) => {props.changeValue(event)}}
            onKeyDown={e => {
                if(e.key === "Enter"){
                    props.changeText();
                } 
            }}

            />
        </div>
        
    );
}


export default ExoDeux;