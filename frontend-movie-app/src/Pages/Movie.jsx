import { useEffect, useRef, useState } from "react"

import { SingleMovie } from "../components/SingleMovie"

import {  fetchData, postMovie } from "../components/action";
import { Modal } from "../components/Modal";
import styled from "styled-components";

const Movie = () => {
    const [data, setdata] = useState([]);
    const image = 'https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_FMjpg_UX1000_.jpg';

    const titleRef = useRef(null);
    const languageRef = useRef(null);
    const releaseDateRef = useRef(null);
    const ratingRef = useRef(null);
    const categoryRef = useRef(null)


    const handleAdd = () => {
        const movie = {
            title : titleRef.current.value,
            language :languageRef.current.value,
            image:image,
            category:categoryRef.current.value,
            rating:ratingRef.current.value,
            releaseDate:releaseDateRef.current.value

        } 
        postMovie(movie);
        closeModal(); 
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(()=>{
        fetchData().then(res =>setdata(res)).catch(err=> console.log(err))
    },[data])


    return <DIV>
        <h1> All Movies</h1>

        <button onClick={openModal}>Add New Movie</button>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",
          width:"95%",margin:"auto",gap:"20px", justifyContent:"space-around", marginTop:"50px"}}
        >
            {
                data?.length > 0 && data?.map((item) => {
                    return <SingleMovie key={item._id} {...item}/>
                })
            }
        </div>

        <div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1>Add Movie</h1>
                <form action="" onSubmit={handleAdd}>
                    <input type="text" placeholder="enter Title"  ref={titleRef} required/>
                    <input type="text" placeholder="enter Language" ref={languageRef} required/>
                    <input type="text" placeholder="enter Release Date"  ref={releaseDateRef} required />
                    <input type="text" placeholder="set Rating" ref={ratingRef} required/>
                    <input type="text" placeholder="Enter Category" ref={categoryRef} required/>

                    <button className="button1">Add</button>
                </form>

            </Modal>
        </div>
        
    </DIV>
}

export { Movie }


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