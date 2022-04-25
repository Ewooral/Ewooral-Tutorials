import { useState } from "react"



const SearchParams = () => {

    const ANIMALS = ["bird", "cat", "dog", "rabbit", "fish"];
    const [location, setLocation] = useState("")
    const [Animal, setAnimal] = useState("")
 
    

  return (
    <div className="search-params">
        <form>
            <label htmlFor="location">
                Location
                {/* {location} */}
                <input type="text" 
                id="location" 
                value={location} 
                placeholder="Location" 
                onChange={ e => setLocation(e.target.value)} 
                />
            </label>
            <label htmlFor="animal">
              Animal 
              <select 
              name="animal" 
              id="animal"
              value={animal}
              onChange={ e => {
                setAnimal(e.target.value)
                setBreed("")
                }}

              onBlur={ e => {
                setAnimal(e.target.value)
                setBreed("")
                }}
              >

              <option />
              {ANIMALS.map(animal =>{
                return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
                )
                })}

              </select>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SearchParams  