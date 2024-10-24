/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
const Modal = ({ isOpen, onClose, children, width, height, color, placement }) => {
  const contentRef = useRef(null);

  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    }
  }, [isOpen]);

  if (contentRef.current) {
    contentRef.current.innerHTML = children;
  }
  const size = {
    width: width || "500px",
    height: height || "auto",
    background: color || "#fff"
  }

  console.log(size, placement);

  if (!isOpen) return null;


  return (
    <>
      {showModal && <div id="modalOverLay" className={`modal ${isOpen ? `open` : `closed`} modal-${placement} fixed inset-0 flex items-center justify-center z-50 duration-300 `}>
        <div className={`animate-open transition-transform transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-10'} duration-1000`} style={size}>
          {/* <div id="modalContaent" className="popUpBox "> */}
          <button
            // onClick={onClose}
            onClick={handleClose}
            className=" fixed  top-3 right-4 px-4 py-2 bg-black text-white hover:bg-gray-600"
          >
            X
          </button>
          <div ref={contentRef}>
            {children}
          </div>
        </div>
      </div >}


    </>
  )
}

export default Modal