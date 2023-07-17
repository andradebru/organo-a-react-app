import './DropdownList.css'

const DropdownList = (props) => {

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
                <select onChange={props.aoAlterado} required={props.required} value={props.valor}>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
        </div>
    )
}

export default DropdownList