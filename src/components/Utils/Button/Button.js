import "./Button.css";

export default function Button(props) {
    const text = props.text;
    return(<button>
        {text}
    </button>)
}