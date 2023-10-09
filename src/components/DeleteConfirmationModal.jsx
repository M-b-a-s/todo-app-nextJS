import { useEffect } from "react";
import { PiWarningCircleBold } from "react-icons/pi";

const DeleteConfirmationModal = ({ onConfirm, onCancel, onClose, deleteTodo }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-bg")) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listeners when the modal is closed
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      onClick={handleClickOutside}
      className="modal-bg bg-gray-700 bg-blur-md bg-opacity-20 w-full h-screen flex items-center justify-center fixed inset-0 z-50"
    >
      <div className="bg-white text-black flex flex-col items-center p-5 relative">
        <button type="button" className="absolute top-3 right-4 text-xl" onClick={onCancel}>
          x
        </button>
        <PiWarningCircleBold className="text-6xl text-red-600" />
        <p className="text-lg text-slate-950 py-3">
          Are you sure you want to delete this todo?
        </p>
        <div className="flex gap-2">
          <button
            onClick={onConfirm}
            className="bg-red-800 text-white px-3 py-2 border-2 border-red-800 rounded-md"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="text-slate-700 px-3 py-2 border-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
