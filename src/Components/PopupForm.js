import {useState} from "react";

const PopupForm = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <div className="container" style={{width: "25%" }}>

            <button onClick={toggleModal} className="btn-modal"
                    style={{color: "white", backgroundColor: "dodgerblue", padding: "10px", border: "hidden"}}>
                Add New Data
            </button>
            <br></br><br></br>
            {modal &&

            (

                <div className="modal">

                    <div onClick={toggleModal} className=""></div>

                    <div className="modal-body">

                        <div className="form" style={{border: "0 0 1px lightgray"}}>
                            <br></br>
                            <form>
                                <p style={{textAlign:"center"}}> Login Data </p>
                                <input type="text" autoComplete="off" placeholder = "Developer" style={{width: "100%"}}></input>
                                <br></br> <br></br>
                                <input type="text" autoComplete="off" placeholder = "Project Title" style={{width: "100%"}}></input>
                                <br></br> <br></br>
                                <input type="text" autoComplete="off" placeholder = "Project Status" style={{width: "100%"}}></input>
                                <div className="button-bottom" style={{display: "inline-flex", width: "100%"}}>
                                    <div style={{float: "right", width: "100%"}}>
                                        <button className="btn-add" style={{
                                            marginRight: "10px",
                                            padding: "5px",
                                            float: "right",
                                            margin: "20px",
                                            backgroundColor: "dodgerblue",
                                            border: "hidden",
                                            color: "white"
                                        }}> Add
                                        </button>
                                        <button className="btn-cancel" style={{
                                            marginRight: "10px",
                                            padding: "5px",
                                            float: "right",
                                            margin: "20px",
                                            backgroundColor: "red",
                                            border: "hidden",
                                            color: "white"
                                        }}> Cancel
                                        </button>
                                    </div>

                                </div>
                                <br></br> <br></br>
                            </form>
                        </div>

                        <button className="close-modal" onClick={toggleModal} style={{
                            padding: "5px",
                            backgroundColor: "red",
                            border: "hidden",
                            marginTop: "10px",
                            color: "white"
                        }}> X
                        </button>

                    </div>

                </div>
            )

            }


        </div>
    )
}

export default PopupForm;

