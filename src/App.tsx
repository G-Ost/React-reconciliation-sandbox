import './App.css'
import ExampleThree from './components/examples/exampleThree'
import ExampleOne from './components/examples/exampleOne'
import ExampleTwo from './components/examples/exampleTwo'
import Sandbox from './components/examples/sandbox'
import SomeClassComponent from './components/examples/someClassComponent'

function App() {
  //Print React Element
  // console.log(Sandbox({ name: "lorem" }))

  //Print component Instance
  // console.log(<Sandbox name={"ipsum"} />)

  //Print React Element with dynamic list as children
  // console.log(ExampleTwo())

  return (
    // <Sandbox name="lorem ipsum" />
    <ExampleOne />
    // <ExampleTwo />
    // <ExampleThree />
  )
}

export default App