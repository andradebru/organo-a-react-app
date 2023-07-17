import './DropdownList.css'

const DropdownList = (props) => {
    console.log(props.itens)

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
                <select required={props.required}>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
        </div>
    )
}

export default DropdownList