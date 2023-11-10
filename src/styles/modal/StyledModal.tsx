import Modal from "styled-react-modal";

/**
 * This component renders a modal
 */
export  const StyledModal = Modal.styled`
 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme} : {theme : any}) => theme.colors.background};
  border-radius: 12px;
  width: 850px;
  overflow:hidden
`

