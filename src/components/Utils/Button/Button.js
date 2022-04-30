import "./Button.css";

export default function Button(props) {
    const text = props.text;
    return(<button style={{width: props.width}}>
        {text}
    </button>)
}