import { useParams } from "react-router-dom"
import { Component, useContext } from "react";
import Carousel from "./Carousel"
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal"



//FUNCTIONAL COMPONENT

// const Details = () => {
//     const { id } = useParams();
//     return <h2>{id}</h2>
// }

// export default Details


// CLASS COMPONENT


/**
 * loading: true,
 * name: Luna
 * city: Seattle
 */
class Details extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { loading: true }
    // }
    state = { loading: true }

    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`)
        const json = await res.json()

        // this.setState(Object.assign({loading: false}, json.pets[0]))

        // OR

        // this.setState({
        //     loading: false,
        // })
        // this.setState(json.pets[0])

        // OR 

        this.setState({ loading: false, ...json.pets[0] })
    }

    //........................... MODAL ...........................
    // A function to toggle the Modal.................................
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {

        if (this.state.loading) {
            return <h2>Loading...</h2>
        }

        // throw new Error("Something went wrong")

        const { animal, breed, city, state, description, name, images, showModal } = this.state

        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>
                    {/* <button>Adopt {name}</button> */}
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>

                                <div>
                                    <h1>Would you like to adopt</h1>
                                    <div className="buttons">
                                        <a href="https://bit.ly/pet-adopt">Yes</a>
                                        <button onClick={this.toggleModal}>No</button>


                                    </div>
                                </div>

                            </Modal>


                        ) : null

                    }
                </div>
            </div>
        )
    }
}

const WrappedDetails = () => {
    const params = useParams();
    const [theme] = useContext(ThemeContext)
    return (
        <ErrorBoundary>
            <Details theme={theme} params={params} />
        </ErrorBoundary>
    )
}

export default WrappedDetails
