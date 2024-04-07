import { ModalWrapper } from "../App.styles";
import { Member } from "../types/types";

type Props = {
  closeModal: () => void;
  data: Member
};
const DetailsView = (props: Props) => {
  const { closeModal, data } = props;

  return (
    <ModalWrapper>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="mt-4">
            <h4>Memebr details</h4>
            <div>
              <label>First Name: {data.firstName}</label>
            </div>

            <div>
              <label>Last Name: {data.lastName}</label>
            </div>

            <div>
              <label>Email Addr.: {data.email}</label>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DetailsView;
