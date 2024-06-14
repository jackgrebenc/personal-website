import React, { useState } from "react";

interface BootstrapModalProps {
  message: string;
  interval: number;
  numWords: number;
  onClose: () => void;
}

const BootstrapModal = ({
  message,
  interval,
  numWords,
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
              <table className="table">
                <tbody>
                  <tr style={{ borderBottom: "hidden" }}>
                    <td>{message}</td>
                  </tr>
                  <tr>
                    <th scope="row">Time Elapsed (s)</th>
                    <td>{interval}</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Words</th>
                    <td>{numWords}</td>
                  </tr>
                  <tr style={{ borderBottom: "hidden" }}>
                    <th scope="row">Words Per Minute</th>
                    <td>
                      {numWords > 0 && interval > 0
                        ? Math.round(numWords * (60 / interval))
                        : 0}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary flex-fill"
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
