const express = require('express');
const router = express.Router();

//  user controller
const {postAnswer, editanswer, deleteanswer}= require('../Controller/answerController')

// Route for posting answer
router.post("/postanswer", postAnswer);
router.post("/editanswer", editanswer);
router.delete("/deleteanswer", deleteanswer);



module.exports = router; 
