import "./Button.css";

export default function Button(props) {
    const text = props.text;
    return(<button onClick={props.onClick} style={{width: props.width}}>
        {text}
    </button>)
}