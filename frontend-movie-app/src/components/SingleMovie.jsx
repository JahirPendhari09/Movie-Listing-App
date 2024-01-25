import { useRef, useState } from "react";
import { deleteMovie, updateMovie } from "./action";
import { Modal } from "./Modal";
import styled from "styled-components";


const SingleMovie = ({ _id, title, rating, category, releaseDate, language }) => {
    const image = 'https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_FMjpg_UX1000_.jpg';

    const titleRef = useRef(null);
    const id = useRef(null);
    const languageRef = useRef(null);
    const handleDelete = (id) => {
        deleteMovie(id)
    }
    const handleUpdate = () => {
        const updatedTitle = titleRef.current.value;
        const updatedLanguage = languageRef.current.value;
        updateMovie(_id, { title: updatedTitle, language: updatedLanguage });
        closeModal(); 
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return <DIV>
        <div className="mainDiv"
        >
            <img src={image} alt="image" width={"80%"} style={{ margin: "auto", marginBottom: "10px", marginTop: "20px" }} />

            <div className="movieData">
                <p style={{ fontWeight: "bolder" }}> {title}</p>
                <p>Rating : {rating}</p>
                <p>Category : {category}</p>
                <p>Release Date:- {releaseDate}</p>
                <p>Language :- {language}</p>
            </div>

            <div style={{ width: "100%", display: "flex" }}>
                <button onClick={openModal} className="button1">
                    Edit
                </button>
                <button className="button1" style={{ backgroundColor: "red"}}
                    onClick={(e) => handleDelete(_id)}
                >
                    Delete
                </button>

            </div>
        </div>
        <div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1>Update Movie</h1>
                <form action="" onSubmit={handleUpdate}>
                    <input type="text" placeholder="Update Title"  ref={titleRef} required/>
                    <input type="text" placeholder="update Language" ref={languageRef} required/>
                    <button className="button1">Update</button>
                </form>

            </Modal>
        </div>

    </DIV>
}

export { SingleMovie }

const DIV = styled.div`
 
   .movieData {
      margin-top:10px;
      text-align: center;
   }

   .mainDiv {
        width: 100%; 
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        text-align: left; 
        border-radius: 10px;
        margin-bottom: 30px;
   }
   input {
       width: 90%;
       padding: 10px;
       border-radius: 5px;
   }

   form {
      width: 300px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      gap: 10px; 
   }
    .button1 {
        width: 40%;
        margin: auto;
        padding: 10px;
        border-radius: 10px;
        font-size: 16px;
        background-color: green;
        color: white;
        margin-bottom: 10px;
        cursor: pointer;
    }
    
`