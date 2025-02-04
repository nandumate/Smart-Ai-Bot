import React, { useContext } from 'react';
import { DataContext, prevUser } from '../context/UserContext';

function Chat() {
  let { input, setInput, prevInput, setPrevInput, showResult, setshowResult, feature, setFeature, prevFeature, setPrevFeature, genImgUrl, setGenImgUrl } = useContext(DataContext);

  return (
    <div className='chat-page'>
      <div className="user">
        {prevFeature === "upimg" ? (
          <>
            <img src={prevUser.imgUrl} alt="" />
            <span>{prevUser.prompt}</span>
          </>
        ) : (
          <span>{prevUser.prompt}</span>
        )}
      </div>
      <div className="ai">
        {prevFeature === "genimg" ? (
          <>
           
            {!genImgUrl ? <span>Generating Image...</span> : <img src={genImgUrl} alt="" />}
          </>
        ) : !showResult ? (
          <span>Loading...</span>
        ) : (
          <span>{showResult}</span>
        )}
      </div>
    </div>
  );
}

export default Chat;