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
    const userID = req.params.id;
    db.query("DELETE FROM members WHERE id = ?", [userID], (error) => {
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

export default router;
