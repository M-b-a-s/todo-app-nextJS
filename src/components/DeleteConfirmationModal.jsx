import React from 'react'

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div cla>
        <div>
            <h2>Delete Confirmation</h2>
            <p>Are you sure you want to delete this todo?</p>
            <div>
                <button>Cancel</button>
                <button>Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteConfirmationModal