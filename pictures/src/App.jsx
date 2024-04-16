import { useState } from 'react'
import ImageList from "./components/Imagelist.jsx "
import ImageShow from "./components/ImageShow.jsx"
import SearchBear from "./components/SearchBear.jsx"
import './App.css'
const [images, setImages] = useState('')
const handleSubimit =async(term)=> {
  console.log('usted esta buscado:' , term)

}
function App() {
  return (
    <div>
      <h1>App</h1>
      <SearchBear onSubmit ={handleSubimit}/>
    </div>
  )
}

export default App
