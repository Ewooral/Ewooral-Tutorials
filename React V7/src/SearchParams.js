import { useState, useEffect } from "react"
import Pet from "./Pet";


const Firstname = ["Elijah", "Elisha", "Mary", "Emmanuel", "David", "Moses", "John"]
const Lastname = ['Boahen', 'Jackson', 'Dawson', 'Asante', 'Owusu', 'Ajapong', 'Tumu']

const Name = () => {
  const [firstname, updateFirstname] = useState("")
  const [lastname, updateLastname] = useState("")
  return (
    <>
    {/* ....................................FIRSTNAME................................... */}
      <label htmlFor="firstname">
        FIRSTNAME 

        <select 
        name="firstname" 
        id="firstname"
        value={firstname}
        onChange={(e)=> updateFirstname(e.target.value)}
        >
        <option />
        {Firstname.map((firstname) => (
          <option key={firstname} value={firstname}> 
           {firstname}
          </option>
        ))}

        </select>
      </label>

    {/* ....................................LASTNAME................................... */}
      <label htmlFor="lastname">
        LASTNAME 

        <select 
        name="lastname" 
        id="lastname"
        value={lastname}
        onChange={(e)=> updateLastname(e.target.value)}
        >
        <option />
        {Lastname.map((lastname) => (
          <option key={lastname} value={lastname}> 
           {lastname}
          </option>
        ))}

        </select>
      </label>

    </>
  )
}


const ANIMALS = ["bird", "cat", "dog", "rabbit", "fish"];

const SearchParams = () => {
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
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
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
            {ANIMALS.map((animal) => (
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
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
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
      {/* ........................PETS................................. */}
      {pets.map((pet) => (

        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}

        />

      ))}

      <h2><Name /></h2>

    </div>
  )
}

export default SearchParams  