import { useState } from 'react';
import { Button } from "react-bootstrap";
import { ButtonWrapper } from "../App.styles";

import { PageEnum } from "../types/types";

import AddMemberForm from "./AddMemberForm";

const AddButton = () => {
  const [page, setPage] = useState(PageEnum.list);

  const showAddPage = () => {
    setPage(PageEnum.add)
  }
  // 711105019 704048005

  return (
    <>
      <ButtonWrapper>
        <Button variant="success" className="add-btn" onClick={showAddPage}>
          Add Member
        </Button>
      </ButtonWrapper>
      {page === PageEnum.add && <AddMemberForm/>}
    </>
  );
};

export default AddButton;
