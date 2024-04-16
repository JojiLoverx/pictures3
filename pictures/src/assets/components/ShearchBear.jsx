import { useState } from "react";
function SearchBear([onSubmit]){
    const handleFormSubmit = (event) => {
   event.preventDefault()
            console.log('Necesito decirle al componente padre sobre los datos ')
        
        onSubmit(term)

    }
    const handleChange = (event) =>{
        console.log(event.tarjet.value)
        setTerm(event.tarjet.value)
    }
        const handleClick = () =>{
            onSubmit(term)
        }
    return(
        <div> 
            <h1>Search Bar</h1>
            <form onSubmit={handleFormSubmit}>
                Confirma tu busqueda: {term}
                <input onChange = { handleClick} value ={term}/>
                <button onSumit={handleClick}></button>
            </form>
        </div>
    )
    }
    export default SearchBear

