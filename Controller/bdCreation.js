// CREATE TABLE users (
//     userId INT(20) AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(20) NOT NULL,
//     firstname VARCHAR(20) NOT NULL,
//     lastname VARCHAR(20) NOT NULL,
//     email VARCHAR(40) NOT NULL,
//     password VARCHAR(100) NOT NULL
// )
// CREATE TABLE questions (
//     id INT(20) AUTO_INCREMENT PRIMARY KEY,
//     questionid  VARCHAR(20) NOT NULL PRIMARY KEY,
//     userId int(20) NOT NULL,
//     title  VARCHAR(100) NOT NULL,
//     description VARCHAR(200) NOT NULL,
//     tag  VARCHAR(100) NOT NULL
//     FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE ON UPDATE CASCADE
// )
// CREATE TABLE answers (
//     answerid  INT(20) AUTO_INCREMENT PRIMARY KEY,
//     userid  int(20) NOT NULL,
//     questionid  VARCHAR(100) NOT NULL,
//     answer  VARCHAR(1200) NOT NULL
//     FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE ON UPDATE CASCADE,
//     FOREIGN KEY (questionid) REFERENCES questions(questionid) ON DELETE CASCADE ON UPDATE CASCADE
// )ENGINE=InnoDB DEFAULT CHARSET=utf8;