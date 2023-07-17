import './FormButton.css'

const FormButton = (props) => {
    return (<button className='form-button'>
        {props.texto}
    </button>)
}

export default FormButton