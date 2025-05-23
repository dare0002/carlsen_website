import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-offwhite bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-lg p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button onClick={onClose} className="absolute top-1 right-2 text-gray-600 hover:text-black font-bold">
                <IoClose className="text-green h-10 w-10" />
            </button>
            {children}
            </div>
        </div>
      );
}
 
export default Modal;