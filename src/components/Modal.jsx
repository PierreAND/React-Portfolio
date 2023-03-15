import { Fragment } from "react";
import Card from "./Card";
import ReactDOM from "react-dom";


const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();
  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Modal;
