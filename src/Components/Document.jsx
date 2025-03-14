import React, { useState } from "react";
import './Document.css'

const DocumentUpload = () => {
  const [showModal, setShowModal] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicants, setApplicants] = useState([]);

  // Function to add a new applicant
  const addApplicant = () => {
    if (applicantName.trim() !== "") {
      setApplicants([...applicants, applicantName]);
      setApplicantName("");
      setShowModal(false);
    }
  };

  // Function to remove an applicant
  const removeApplicant = (index) => {
    const updatedApplicants = applicants.filter((_, i) => i !== index);
    setApplicants(updatedApplicants);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>Document Upload</h1>
        <button className="add-applicant" onClick={() => setShowModal(true)}>
          + Add Applicant
        </button>
      </div>

      {/* Applicants List */}
      <div className="applicants-list">
        {applicants.map((name, index) => (
          <div key={index} className="applicant-item">
            <span className="applicant-name">{name}</span>
            <button className="delete-btn" onClick={() => removeApplicant(index)}>🗑️</button>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr />

     

      {/* Navigation Buttons */}
      <div className="buttons">
        <button className="back">← Back</button>
        <button className="next">Next →</button>
      </div>

      {/* Add Applicant Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add Applicant</h2>
              <button className="close" onClick={() => setShowModal(false)}>✖</button>
            </div>

            <div className="modal-body">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button className="save" onClick={addApplicant}>✅ Save</button>
              <button className="cancel" onClick={() => setShowModal(false)}>❌ Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
