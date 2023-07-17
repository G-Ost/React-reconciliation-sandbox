import { useState } from "react"

interface SandboxProps {
    name: string
}

const Sandbox = ({ name }: SandboxProps) => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            {counter}

            {/* Example of malicious injection */}
            {/* <a href="javascript: console.log(this)">Click me</a> */}
        </div>
    )

}

export default Sandbox

const Example = () => {
    return (
        <div>
            <span>
                <input />
            </span>
        </div>
    )
}