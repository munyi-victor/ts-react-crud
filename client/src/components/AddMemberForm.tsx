import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import { FormData } from "../types/types";

type Props = {
  backBtn: () => void;
}
const AddMemberForm = (props: Props) => {
  // : React.FC
  const { backBtn } = props;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/members",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error adding member", error);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });

    backBtn();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="text-center">
        <h3>Add Member</h3>
      </div>
      <Form.Group controlId="formFirstName" className="mb-2">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formLastName" className="mb-2">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="mt-3 d-flex gap-3">
        <Button variant="primary" type="button" onClick={backBtn}>
          Back
        </Button>

        <Button variant="success" type="submit">
          Add Member
        </Button>
      </div>
    </Form>
  );
};

export default AddMemberForm;
