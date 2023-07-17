import { useState } from "react"
import ExampleContainer from "../ui/exampleContainer"

interface InputProps {
    id: string,
    placeholder?: string
}

const Input = ({ id, placeholder }: InputProps) => {

    return (
        <div>
            <label htmlFor={id} />
            <input placeholder={placeholder} id={id} />
        </div>
    )
}




const ExampleOne = () => {
    const [firstLanguage, setFirstLanguage] = useState<"polish" | "english">("polish");
    const [secondLanguage, setSecondLanguage] = useState<"german" | "spanish">("german");
    const [thirdLanguage, setThirdLanguage] = useState<"białostocki" | "ślunski">("białostocki");
    const [forthLanguage, setForthLanguage] = useState<"JavaScript" | "PHP">("JavaScript");


    return (
        <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "auto auto" }}>
            <ExampleContainer language={firstLanguage} setLanguage={(language) => { setFirstLanguage(language) }} languageOptions={["polish", "english"]}>
                <>
                    {
                        firstLanguage === "polish" ?
                            <div>
                                <label htmlFor={"1"} />
                                <input style={{ width: 200 }} placeholder="Dalej, napisz tu coś!" id={"1"} />
                            </div> :
                            <div>
                                <span id="2">
                                    Sorry, English is not supported.
                                </span>
                            </div>
                    }
                </>
            </ExampleContainer>

            <ExampleContainer language={secondLanguage} setLanguage={(language) => { setSecondLanguage(language) }} languageOptions={["german", "spanish"]}>
                <>
                    {/* Add different keys and state won't be preserved */}
                    {
                        secondLanguage === "spanish" ?
                            <div>
                                <label htmlFor={"3"} />
                                <input style={{ width: 200 }} placeholder="¡Adelante, escribe algo aquí!" id={"3"} />
                            </div> :
                            <div >
                                <label htmlFor={"4"} />
                                <input style={{ width: 200 }} placeholder="Nur zu, schreiben Sie hier etwas!" id={"4"} />
                            </div>
                    }
                </>
            </ExampleContainer>

            <ExampleContainer language={thirdLanguage} setLanguage={(language) => { setThirdLanguage(language) }} languageOptions={["białostocki", "ślunski"]}>
                <>
                    {/* Add different keys and state won't be preserved */}
                    {thirdLanguage === "białostocki" ?
                        <Input id="5" placeholder="Napisz coś dla mnie!" /> :
                        <Input id="6" placeholder="Pisz, piorunie!" />}
                </>
            </ExampleContainer>

            <ExampleContainer language={forthLanguage} setLanguage={(language) => { setForthLanguage(language) }} languageOptions={["JavaScript", "PHP"]}>
                <>
                    {/* Add the same key for both and state will be preserved */}
                    {forthLanguage === "JavaScript" ? <Input key={"A"} id="5" placeholder="console.log()!" /> : null}
                    {forthLanguage !== "JavaScript" ? <Input key={"A"} id="6" placeholder="echo!" /> : null}

                </>
            </ExampleContainer>


        </div >
    )
}

export default ExampleOne;