import React, { useState } from "react";

interface BootstrapModalProps {
  message: string;
  interval: number;
  currentIndex: number;
}

const BootstrapModal = ({
  message,
  interval,
  currentIndex,
}: BootstrapModalProps) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const resetTest = () => {
    window.location.reload();
    handleClose();
  };
  return (
    <>
      <div
        className={show ? "modal fade show" : "modal fade"}
        style={{ display: show ? "block" : "none" }}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Test Completed</h5>
              <button
                type="button"
                className="btn-close"
                onClick={resetTest}
              ></button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
              <div>
                Words Per Minute:{" "}
                {currentIndex > 0 && interval > 0
                  ? currentIndex * (60 / interval)
                  : 0}
              </div>
            </div>
            <div className="modal-footer center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={resetTest}
              >
                New Test
              </button>
            </div>
          </div>
        </div>
      </div>

      {show && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default BootstrapModal;
