/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./TicketForm.css";
import uploadFileSVG from "/assets/images/icon-upload.svg";
import { useNavigate } from "react-router-dom";


export default function TicketForm({setUserDetails, onImageUpload }) {
  const navigate = useNavigate();
  
  const nameRef = useRef();
  const emailRef = useRef();
  const githubHandleRef = useRef();
  const photoUrlRef = useRef();

  const [uploadedPhoto, setUploadedPhoto] = useState();
  const [photoUrl, setPhotoUrl] = useState();


  
  useEffect(()=>{
    if(!uploadedPhoto){
      return
    }
    const imageUrl = URL.createObjectURL(uploadedPhoto);
    setPhotoUrl(imageUrl);
    URL.revokeObjectURL(uploadedPhoto)
  }, [uploadedPhoto])

  const handleClick = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const githubHandle = githubHandleRef.current.value;
    const url = photoUrlRef.current.files[0];

    setUserDetails({ name, email, githubHandle, url });
    onImageUpload(photoUrl)
    navigate("/successful")
    
  };

  return (
    <div className="form">
      <form action="">
        <div className="avatar-input">
          <label htmlFor="avatar">
            Upload Avatar
            <div className="inside-label">
              <img src={uploadedPhoto? photoUrl : uploadFileSVG} alt="" />
              {console.log(uploadedPhoto)}
              <p>Drag and drop or Click to upload</p>
            </div>
          </label>

          <input
            id="avatar"
            type="file"
            accept="image/png, image/jpeg"
            required
            ref={photoUrlRef}
            onChange={e=>setUploadedPhoto(e.target.files[0])}
          />

          <span>Upload your photo (JPG or PNG, max size: 500KB)</span>
        </div>
        <div className="input-div">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            required
            placeholder="Adedolapo Yakub"
            ref={nameRef}
          />
        </div>
        <div className="input-div">
          <label htmlFor="Email">Email Address</label>
          <input
            type="email"
            required
            placeholder="adedolapo@gmail.com"
            ref={emailRef}
          />
        </div>
        <div className="input-div">
          <label htmlFor="githubUsername">Github Username</label>
          <input
            type="text"
            required
            placeholder="adedolapo@gmail.com"
            ref={githubHandleRef}
          />
        </div>
        <button className="form-btn" onClick={handleClick}>
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}
