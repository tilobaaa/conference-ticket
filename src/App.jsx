import logo from "/assets/images/logo-full.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketForm from "./components/TicketForm";
import SuccessfulTicket from "./components/SuccessfulTicket";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    githubHandle: "",
    url: "",
  });

  const [imgUrl, setImgUrl] = useState();
  
  const getImageUrl = (file)=>{
    setImgUrl(file)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <img src={logo} alt="logo" />

              <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
              <p>
                Secure your spot at next year{"'"}s biggest coding conference
              </p>
              <TicketForm
                userDetails={userDetails}
                setUserDetails={setUserDetails}
                onImageUpload={getImageUrl}
              />
            </div>
          }
        />

        <Route path="/successful" element={<SuccessfulTicket userDetails={userDetails} imgUrl={imgUrl}/>} />
      </Routes>
    </BrowserRouter>
  );
}
