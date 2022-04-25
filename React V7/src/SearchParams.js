import { useState, useEffect } from "react"
import Pet from "./Pet";



const SearchParams = () => {

  const ANIMALS = ["bird", "cat", "dog", "rabbit", "fish"];
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const breeds = []
  const [pets, setPets] = useState([])

  useEffect(() => {
    requestPets();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`
    )
    const json = await res.json();

    setPets(json.pets)
  }



  return (
    <div className="search-params">
      <form>

        {/* ............................LOCATION....................... */}
        <label htmlFor="location">
          Location
          {/* {location} */}
          <input type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>


        {/* ...........................ANIMAL.......................... */}
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={e => {
              setAnimal(e.target.value)
              setBreed("")
            }}

            onBlur={e => {
              setAnimal(e.target.value)
              setBreed("")
            }}
          >

            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}

          </select>
        </label>

        {/* .......................BREED........................ */}
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={e => {
              setBreed(e.target.value)
            }}

            onBlur={e => {
              setAnimal(e.target.value)
            }}
          >

            <option />
            {breeds.map(allBreed => (
              <option key={allBreed} value={allBreed}>
                {allBreed}
              </option>
            ))}

          </select>
        </label>

        {/* .......................END LABEL........................ */}
        <button>Submit</button>
      </form>
      {pets.map(pet => {
        <Pet 
          name={pet.name} 
          animal={pet.animal} 
          breed={pet.breed} 
          key={pet.id} />

      })}
    </div>
  )
}

export default SearchParams  