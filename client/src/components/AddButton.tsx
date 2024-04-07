import { Button } from "react-bootstrap";
import { ButtonWrapper } from "../App.styles";

type Props = {
  showAddPage: () => void;
};
const AddButton = (props: Props) => {
  const { showAddPage } = props;
  return (
    <>
      <ButtonWrapper>
        <Button variant="success" className="add-btn" onClick={showAddPage}>
          Add Member
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default AddButton;
