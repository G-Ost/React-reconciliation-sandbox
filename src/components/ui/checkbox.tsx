interface ExampleCheckboxProps {
    id: string,
    label?: string,
    onClick: () => void,
    isChecked: boolean
}

const ExampleCheckbox = ({ id, label, onClick, isChecked }: ExampleCheckboxProps) => {

    return (
        <div>
            <input checked={isChecked} onClick={onClick} id={id} type="checkbox" style={{ marginRight: "10px" }} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default ExampleCheckbox;