import "./Modal.css";

const Modal = (props: {onClose: () => void, show?: boolean, children: JSX.Element}) => {
  if (!props?.show) return null;

  return (
    <div className="modal" onClick={() => props.onClose()}>
      <div className="modal-content">
        {props?.children}
      </div>
    </div>
  );
};

export default Modal;
