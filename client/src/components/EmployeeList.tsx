import { useState } from "react";

import { Button } from "react-bootstrap";
import { Member } from "../types/types";

import DetailsView from "./DetailsView";

type Props = {
  members: Member[];
  deleteMember: (memId: number) => void;
  editMemberBtn: (member: Member) => void;
};

const EmployeeList = (props: Props) => {
  const { members, deleteMember, editMemberBtn } = props;

  const [showDetails, setShowDetails] = useState(false);
  const [memberDetails, setMemberDetails] = useState(null as unknown as Member || null);

  const viewDetails = (data: Member) => {
    setMemberDetails(data);
    setShowDetails(true);
  }

  const closeModal = () => {
    setShowDetails(false);
  };

  return (
    <div>
      <h3 className="text-center">Members List</h3>
      <table className="border shadow-sm w-100">
        <tr className="border">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Actions</th>
        </tr>
        {members.map((member: Member) => (
          <tr key={member.id} className="border">
            <td className="border p-2">
              {member.firstName} {member.lastName}
            </td>
            <td className="border p-2">{member.email}</td>
            <td className="border p-2">
              <div style={{ display: "flex", gap: 20 }}>
                <Button variant="success" onClick={() => viewDetails(member)}>
                  View
                </Button>
                <Button variant="success" onClick={() => editMemberBtn(member)}>Edit</Button>
                <Button
                  variant="danger"
                  onClick={() => deleteMember(member.id)}
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </table>
      {showDetails && memberDetails !== null && <DetailsView closeModal={closeModal} data={memberDetails} />}
    </div>
  );
};

export default EmployeeList;
