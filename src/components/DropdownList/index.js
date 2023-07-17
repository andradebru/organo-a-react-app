import './DropdownList.css'

const DropdownList = (props) => {
    console.log(props.itens)

    return (
        <div>
            <label>{props.label}</label>
                <select>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
        </div>
    )
}

export default DropdownList