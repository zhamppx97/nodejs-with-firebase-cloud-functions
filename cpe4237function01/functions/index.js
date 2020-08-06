const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
});
exports.studentName = functions.https.onRequest((request, response) => {
   functions.logger.info("Student logs!", {structuredData: true});
   response.send("5951001121 นายวรพล ควรประกอบกิจ");
});
