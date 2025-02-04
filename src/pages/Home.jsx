import React, { useContext } from 'react';
import { RiImageAiLine, RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import "../App.css";
import { DataContext, prevUser, user } from '../context/UserContext';
import Chat from './Chat'; // Corrected import path
import { generateResponse } from '../gemini'; // Import generateResponse
import { query } from '../huggingFace'; // Import query function


function Home() {
  let { startRes, setStartRes, popUp, setPopUp, input, setInput, feature, setFeature, showResult, setShowResult, prevFeature, setPrevFeature ,genImgUrl,setGenImgUrl} = useContext(DataContext);
 
  async function handleSubmit(e) {
    e.preventDefault();
    setStartRes(true);
    setPrevFeature(feature);
    setShowResult("");
    prevUser.data = user.data;
    prevUser.mime_type = user.mime_type;
    prevUser.imgUrl = user.imgUrl;
    prevUser.prompt = input;
    user.data = null;
    user.mime_type = null;
    user.imgUrl = null;
    setInput("");
    let result = await generateResponse();
    setShowResult(result);
    setFeature("chat");
    
  }

  function handleImage(e) {
    setFeature("upimg");
    let file = e.target.files[0];
    if (file) {
      console.log("File selected:", file);
      let reader = new FileReader();
      reader.onload = (event) => {
        let base64 = event.target.result.split(",")[1];
        user.data = base64;
        user.mime_type = file.type;
        user.imgUrl = `data:${user.mime_type};base64,${user.data}`;
        console.log("Image data:", user.imgUrl);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file selected");
    }
  }

  async function handleGenerateImg(e) {
    e.preventDefault();
    setStartRes(true);
    setPrevFeature(feature);
    prevUser.prompt = input;
    setGenImgUrl("");

    try {
      let result = await query();
      let url = URL.createObjectURL(result); // Create a URL for the Blob
      console.log(url);

      prevUser.imgUrl = url; // Set the image URL
      setGenImgUrl(url); // Update the genImgUrl state with the image URL
    } catch (error) {
      console.error("Error generating image:", error);
    }

    setInput("");
    setFeature("chat");
  }

  return (
    <div className='home'>
      <nav>
        <div className="logo" onClick={()=>{
          setStartRes(false)
          setFeature("chat")
          user.data = null;
          user.mime_type = null;
          user.imgUrl = null;
          setPopUp(false)
        }}>
          Smart AI Bot
        </div>
      </nav>
      <input type="file" accept='image/*' hidden id='inputImg' onChange={handleImage}/>
      {!startRes ? <div className="hero">
          <span id="tag">What can I help with?</span>
          <div className="cate">
            <div className="upImg" onClick={()=>{
                document.getElementById("inputImg").click()
              }
            }>
              <RiImageAddLine />
              <span>Upload Image</span>
            </div>
            <div className="genImg" onClick={()=>setFeature("genimg")}>
              <RiImageAiLine />
              <span>Generate Image</span>
            </div>
          
          <div className="chat" onClick={()=>setFeature("chat")}>
            <MdChatBubbleOutline />
            <span>Let's Chat</span>
          </div>
        </div>
        </div>
      : 
        <Chat />
      }
      
      <form className="input-box" onSubmit={(e) =>{
         e.preventDefault()
         if (input) {
           if(feature=="genimg")
{
  handleGenerateImg(e)
}     
else{
  handleSubmit(e)}
}
}
         }>

<img src={user.imgUrl} alt="" id="im" />

      {popUp ? <div className="pop-up">
          <div className="select-up"  onClick={()=>{
            setPopUp(false)
            setFeature("chat")
                document.getElementById("inputImg").click()
              }
            }>
            <RiImageAddLine />
            <span>Upload Image</span>
          </div>
          <div className="select-gen" onClick={()=>{
              setPopUp(false)
            setFeature("genimg")}}>
            <RiImageAiLine />
            <span>Generate Image</span>
          </div>
        </div>:null}
        
        <div id="add" onClick={()=>{

          setPopUp(prev=>!prev)
        }}>
          {feature=="genimg"?<RiImageAiLine  id="genImg"/>:<FiPlus />}
          
        </div>
        <input type="text" placeholder='Ask Something...' onChange={(e)=>setInput(e.target.value)} value={input} />
       {input? <button id="submit">
          <FaArrowUpLong />
        </button>:null}
      </form>
    </div>
  );
}

export default Home;