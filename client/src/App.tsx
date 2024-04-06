import { useEffect, useState } from "react";
import axios from "axios";

import AddButton from "./components/AddButton";
import EmployeeList from "./components/EmployeeList";
import AddMemberForm from "./components/AddMemberForm";

import { GlobalStyle, Wrapper } from "./App.styles";
import { Container } from "react-bootstrap";

import { Member, PageEnum } from "./types/types";

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [shownPage, setShownPage] = useState(PageEnum.list);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/members");
        setMembers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getMembers();
  }, [members]);

  const deleteMember = async(memId:number) => {
    try {
      const response = await axios.delete(`http://localhost:5000/members/${memId}`);
      setMembers([...members, response.data]);
      alert("Member deleted successfully!");
    } catch (error) {
      console.error("Error deleting member", error);
    }
  }

  const showAddPage = () => {
    setShownPage(PageEnum.add);
  }

  const backBtn = () => {
    setShownPage(PageEnum.list);
  }

  return (
    <Container>
      <GlobalStyle />
      <Wrapper>
        <div className="listCon">
          {shownPage === PageEnum.list && (
            <div>
              <AddButton showAddPage={showAddPage} />
              <EmployeeList members={members} deleteMember={deleteMember} />
            </div>
          )}

          {shownPage === PageEnum.add && <AddMemberForm backBtn={backBtn} />}
        </div>
      </Wrapper>
    </Container>
  );
}

export default App;
