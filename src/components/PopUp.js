import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

const BoxContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
`;

const BoxTitle = styled.h3`
  color: green;
  margin-top: 0;
`;

const BoxButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box onClick={toggleBox} style={{ display: isOpen ? "flex" : "none" }}>
        <BoxContent onClick={(e) => e.stopPropagation()}>
          <BoxTitle>Popup Box Title</BoxTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet, nisi a lacinia faucibus, arcu quam accumsan dolor, eu
            tristique nisl ipsum a augue. Nulla eget sapien quis tortor auctor
            rhoncus.
          </p>
          <BoxButton onClick={toggleBox}>Close</BoxButton>
        </BoxContent>
      </Box>
      <button onClick={toggleBox}>Show Popup Box</button>
    </>
  );
};

export default PopUp;


//logic for using
// const Box = ({ onClose }) => {
//     return (
//       <BoxWrapper>
//         <CloseButton onClick={onClose}>x</CloseButton>
//         <h2>This is a pop-up box</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
//           sapien lorem. Proin ac faucibus tortor. Aliquam et nisl in sem sagittis
//           tincidunt. Sed ac justo id ante lobortis interdum.
//         </p>
//       </BoxWrapper>
//     );
//   };
  
//   const ParentComponent = () => {
//     const [showBox, setShowBox] = useState(false);
  
//     const handleBoxClose = () => {
//       setShowBox(false);
//     };
  
//     return (
//       <div>
//         <h1>Welcome to my website</h1>
//         {showBox && <Box onClose={handleBoxClose} />}
//         <button onClick={() => setShowBox(true)}>Show Box</button>
//       </div>
//     );
//   };
  
//   export default ParentComponent;