const ExampleTwo = () => {
    const list = ["A", "B", "C"]


    return (
        <ul>
            {list.map(item => <li key={item}>{item}</li>)}
            <li>D</li>
            <li>E</li>
        </ul>

    )
}

export default ExampleTwo;