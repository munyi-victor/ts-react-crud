import { ModalWrapper } from "../App.styles";

const DetailsView = () => {
  return (
    <ModalWrapper>
      <div>
        <button id="myBtn">Open Modal</button>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DetailsView;
