/** Christopher Findlay, Hammad Mahmood, Samuel Kyle Yung, Gurnoor Singh | April 1st, 2025
 * Assignment 3 - Full-Stack Web Application
 *
 * This component creates a modal overlay on the screen, rendering its children within the modal content area.
 * It accepts `showModal` and `setShowModal` props to control the visibility of the modal.
 * When `showModal` is true, the modal appears with a semi-transparent black background.
 * The modal includes a close button that calls `setShowModal(false)` to hide the modal.
 */

import React from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="bg-black/50 fixed inset-0">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col p-5 bg-slate-300 w-1/2 p-s">
              <button
                onClick={() => setShowModal(false)}
                className="flex flex-col items-end text-2xl mb-3 px-2"
              >
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
