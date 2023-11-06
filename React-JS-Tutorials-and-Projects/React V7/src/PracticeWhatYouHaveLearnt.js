import Image from "../profile_pic.jpg"
export const PracticeWhatYouHaveLearnt = () => {
    return (
        <div className="">
            <h1 className="text-center">The Earth revolves around me</h1>
            <MyDish dishes={dishObj} id= {true} />
        </div>
    )
}



function MyDish({dishes, id}) {
    return (
        <>
            <ul className="flex flex-col text-center bg-green-200 p-6">
                {dishes.map((d) => (
                    <li key={d.id}>{d.title}</li>
                ))}
            </ul>
            {id ? <img src={Image}
                alt="profile pic" 
                className="md:w-[500px] md:h-[300px] object-contain"
            /> 
                :
                <h1>restricted to only qualified watchers!!</h1>
            
            }
            
        </>
    )
}



const theDish = ["bread", "fish", "meat", "Catfish stew"]

// eslint-disable-next-line no-undef
const dishObj = theDish.map((dish, key) => ({ id: key, title:dish })
   
);