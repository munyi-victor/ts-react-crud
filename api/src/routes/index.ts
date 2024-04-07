import { Router } from "express";
import db from "../db/db";
import { Member } from "../types/index";

const router = Router();

// Fetching members from DB route
router.get("/members", async (req, res) => {
  try {
    db.query("SELECT * FROM members", (error, result: any) => {
      if (error) {
        console.error(error);
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching members");
  }
  // db.end();
});

// Inserting new members into DB route
router.post("/members", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    db.query(
      "INSERT INTO members (firstName, lastName, email) VALUES (?, ?, ?)",
      [firstName, lastName, email],
      (error) => {
        if (error) {
          ;
          res
            .status(500)
            .send({ message: "Internal server error", error: error });
          return;
        } else {
          res.send("Member added successfully");
        }
      }
    );
  } catch (error) {
    res.status(500).send("Error adding new members");
  }
});

// Deleting a member route
router.delete("/members/:id", async (req, res) => {
  try {
    const memId = req.params.id;
    db.query("DELETE FROM members WHERE id = ?", [memId], (error) => {
      if (error) {
        res.status(500).send({ message: "Error deleting member" , error:error});
      } else {
        res.status(200).send("Member deleted successfully");
      }
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
})

// Updating member details
router.put("/members/:id", async (req, res) => {
  try {
    const memId = req.params.id;
    const { firstName, lastName, email } = req.body;

    const updateQuery = `UPDATE members SET firstName = ?, lastName = ?, email = ? WHERE id = ?`;

    db.query(updateQuery, [firstName, lastName, email, memId], (error, result) => {
      if (error) {
        console.error(error);
        res.send({message:"Error updating member details ", error: error});
      } else {
        console.log(result);
        res.status(200).send("Member details update successfully!");
      }
    })
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
})

export default router;
