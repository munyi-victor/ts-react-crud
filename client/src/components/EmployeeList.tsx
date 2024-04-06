import { Button } from "react-bootstrap";
import { Member } from "../types/types";

type Props = {
  members: Member[];
  deleteMember: (memId: number) => void;
};

const EmployeeList = (props: Props) => {
  const { members, deleteMember } = props;
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
                <Button variant="success">View</Button>
                <Button variant="success">Edit</Button>
                <Button variant="danger" onClick={() => deleteMember(member.id)}>
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default EmployeeList;