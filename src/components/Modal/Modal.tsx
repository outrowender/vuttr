import "./Modal.css";

const Modal = (props: { onClose: () => void; show?: boolean }) => {
  if (!props?.show) return null;

  return (
    <div className="modal" onClick={() => props.onClose()}>
      <div className="modal-content">
        <div className="modal-header">  
          <h2>Title</h2>
          <button className="secondary" onClick={() => props.onClose()}>
            Close
          </button>
        </div>
        <div className="modal-body">
          <p>Body</p>
        </div>
        <div className="modal-footer">
          <p>Bottom</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
