import React, { useEffect, useState } from "react";
import axios from "axios";

import AddButton from "./components/AddButton";

import { GlobalStyle, Wrapper } from "./App.styles";
import { Container, Button } from "react-bootstrap";

import { Member } from "./types/types";

function App() {
  const [members, setMembers] = useState([]);

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
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Wrapper>
        <div>
          <AddButton />
          <table className="border shadow-sm w-75">
            <tr className="border">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
            {members.length > 0 ? (
              members.map((member: Member) => (
                <tr key={member.id} className="border">
                  <td className="border p-2">
                    {member.firstName} {member.lastName}
                  </td>
                  <td className="border p-2">{member.email}</td>
                  <td className="border p-2">
                    <div style={{ display: "flex", gap: 20 }}>
                      <Button variant="success">View</Button>
                      <Button variant="danger">Delete</Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <p>Loading data...</p>
            )}
          </table>
        </div>
      </Wrapper>
    </Container>
  );
}

export default App;
