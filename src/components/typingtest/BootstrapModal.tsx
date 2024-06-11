import React, { useState } from "react";

interface BootstrapModalProps {
  message: string;
  interval: number;
  currentIndex: number;
  onClose: () => void;
}

const BootstrapModal = ({
  message,
  interval,
  currentIndex,
  onClose,
}: BootstrapModalProps) => {
  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Test Completed</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
              <p>Time elapsed: {interval} seconds</p>
              <div>
                Words Per Minute:{" "}
                {currentIndex > 0 && interval > 0
                  ? Math.round(currentIndex * (60 / interval))
                  : 0}
              </div>
            </div>
            <div className="modal-footer center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                New Test
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default BootstrapModal;
