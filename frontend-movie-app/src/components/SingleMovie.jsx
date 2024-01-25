import { useRef, useState } from "react";
import { deleteMovie, updateMovie } from "./action";
import { Modal } from "./Modal";


const SingleMovie = ({ _id, title, rating, category, releaseDate, language}) => {
    const image = 'https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_FMjpg_UX1000_.jpg';

    const titleRef = useRef(null);
    const languageRef = useRef(null);
    const handleDelete = (id) =>{
        deleteMovie(id)
    }
    const handleUpdate = (id) =>{
       
    }
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = ()=> {
      setIsModalOpen(true);
    };

    const closeModal = ()=> {
      setIsModalOpen(false);
    };
    return<div>
     <div style={{
        width: "100%", border: "1px solid red", display: "flex",
        flexDirection: "column", textAlign: "left", borderRadius: "10px", marginBottom: "30px"
    }}
    >
        <img src={image} alt="image"  width={"80%"} style={{margin:"auto",marginBottom:"10px",marginTop:"20px"}}/>

        <p style={{ marginLeft: "20px", fontWeight: "bolder" }}> {title}</p>

        <p style={{ marginLeft: "20px", marginTop: "-10px", fontWeight: "bolder" }}>Rating : {rating}</p>
        <p style={{ marginLeft: "10px", marginTop: "-10px" }}>Date:- {releaseDate}</p>
        <p style={{ marginLeft: "10px", marginTop: "-10px" }}>Language :- {language}</p>

        <div style={{width:"100%", display:"flex"}}>
            <button style={{
                width: "40%", margin: "auto", padding: "10px", borderRadius: "10px"
                , fontSize: "16px", backgroundColor: "green", color: "white", marginBottom: "10px"
            }}
            onClick={openModal}
            >
                Edit
            </button>
            <button style={{
                width: "40%", margin: "auto", padding: "10px", borderRadius: "10px"
                , fontSize: "16px", backgroundColor: "red", color: "white", marginBottom: "10px"
            }}
              onClick={(e)=>handleDelete(_id)}
            >
                Delete
            </button>
        </div>
    </div>
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>

        <form action="" style={{width:"300px",display:"flex", flexDirection:"column",padding:"20px",gap:"10px"}}>
            <input type="text" placeholder="Update Title" style={{width:"90%",padding:"10px",borderRadius:"5px"}}  ref={titleRef}/>
            <input type="text" placeholder="update Language" style={{width:"90%",padding:"10px",borderRadius:"5px"}}  />
        </form>
      
       </Modal>
    </div>
     
    </div>
}

export { SingleMovie }