// import { useParams } from "react-router-dom"
import { Component } from "react";



//FUNCTIONAL COMPONENT

// const Details = () => {
//     const { id } = useParams();
//     return <h2>{id}</h2>
// }

// export default Details

// CLASS COMPONENT
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`)
        const json = await res.json()
        this.setState(Object.assign({loading: false}, json.pets[0]))


        this.setState({
            loading: false,
        })
        this.setState(json.pets[0])
    }

    render() {

        if (this.state.loading) {
            return <h2>Loading...</h2>
        }

        const { animal, breed, city, state, description, name } = this.state

        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}


export default Details
