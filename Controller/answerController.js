// database connection
const dbconnection=require('../db/dbConfig')
const bcrypt=require('bcrypt')
const {StatusCodes}=require('http-status-codes')
const jwt=require('jsonwebtoken')
async function postAnswer(req, res) {
    const { userid, questionid, answer } = req.body;
    const  userid1=parseInt(userid)
   
    console.log(userid, questionid, answer)
    if (!answer ) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "please, provide your answer" });
    }
    try {
      await  dbconnection.query(
        "insert into answers ( userid, questionid, answer) values ( ?, ?, ?)",
        [userid1, questionid, answer]
      );
      return res
        .status(StatusCodes.CREATED)
        .json({ message: "Answer posted successfully" });
    } catch (err) {
      //    console.log(err);
      return res
        .status(500)
        .json({ message: "something went wrong, please try again later  "  + err });
    }

  }
  async function editanswer(req, res) {
    const { answerid, answer } = req.body;
    console.log(answerid)
    const  answerid1=parseInt(answerid)
    if (!answer ) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "please, provide your answer" });
    }
    try {
      const [result] = await dbconnection.query(
        "UPDATE answers SET answer = ? WHERE answerid = ?",
        [answer, answerid1]
      );
    
      if (result.affectedRows === 0) {
        // No rows were updated
        return res.status(404).json({ message: "Answer not found" });
      }
    
      return res.status(200).json({ message: "Answer updated successfully" });
    } catch (err) {
      console.error("Database update error:", err); // Log detailed error
      return res
        .status(500)
        .json({ message: "Something went wrong, please try again later.", error: err.message });
    }

  }
  async function deleteanswer(req, res) {
    const { answerid } = req.query; // Use req.query for query parameters
  const answerid1 = parseInt(answerid);
   
    console.log( answerid)
    if (!answerid ) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "please, provide your answer" });
    }
    try {
      await  dbconnection.query(
        "DELETE FROM answers WHERE answerid= ?",
        [answerid1]
      );
      return res
        .status(StatusCodes.CREATED)
        .json({ message: "Answer deleted successfully" });
    } catch (err) {
      //    console.log(err);
      return res
        .status(500)
        .json({ message: "something went wrong, please try again later  "  + err });
    }

  }
  
 
module.exports= {postAnswer, editanswer, deleteanswer}
