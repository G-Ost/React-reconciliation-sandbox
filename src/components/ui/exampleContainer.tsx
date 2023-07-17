import ExampleCheckbox from "./checkbox"

interface ExampleContainerProps<T extends string> {
    language: T
    languageOptions: T[]
    setLanguage: (language: T) => void,
    children: JSX.Element
}

const ExampleContainer = <T extends string,>({ language, languageOptions, setLanguage, children }: ExampleContainerProps<T>) => {


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", border: "solid white 2px", padding: "20px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
                <ExampleCheckbox isChecked={language === languageOptions[0]} onClick={() => { setLanguage(languageOptions[0]) }} id={`${languageOptions[0]}_checkbox`} label={languageOptions[0]} />
                <ExampleCheckbox isChecked={language === languageOptions[1]} onClick={() => { setLanguage(languageOptions[1]) }} id={`${languageOptions[0]}_checkbox`} label={languageOptions[1]} />
            </div>
            {children}
        </div>
    )
}

export default ExampleContainer;