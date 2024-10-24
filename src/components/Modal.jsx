/* eslint-disable react/prop-types */


import { useRef } from "react";
const Modal = ({ isOpen, onClose, children, width, height, color, placement }) => {
  const contentRef = useRef(null);
  console.log("children :", children);

  if (contentRef.current) {
    contentRef.current.innerHTML = children;
  }
  const size = {
    width: width || "500px",
    height: height || "auto",
    background: color || "#fff"
  }

  if (!isOpen) return null;
  return (
    <>
      <div id="modalOverLay" className={`modal modal-${placement} fixed inset-0 flex items-center justify-center z-50 `}>
        <div id="modalContaent" className="overflow-auto rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-100 animate-open " style={size}>
          <button
            onClick={onClose}
            className=" fixed animate-close top-3 right-4 px-4 py-2 bg-black text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 "
          >
            X
          </button>
          <div ref={contentRef}>
            {children}
          </div>
        </div>
      </div >


    </>
  )
}

export default Modal