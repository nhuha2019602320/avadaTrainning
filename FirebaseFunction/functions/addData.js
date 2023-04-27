const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const { FieldValue } = require("firebase-admin/firestore");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

(async () => {
//   const postRef = db.collection("posts").doc('8wZ7rkIEs98Ki3tFQHbO');

//   const res = await postRef.update({
//     body: FieldValue.delete()
//   });
//   await postRef.add({
//     title: "hhh",
//     body: "bodyhihih",
//   });
  db.collection("users").doc("xxxeeeeeeeeeeeee").set({
      name: "hifdfhih",
      score: [
       tua= {math:10},
        hu = {math:8}
      ],
      favorites: {
        food: "Pizfasdfasza",
        color: "Bldfaue",
        subject: "Rsdfasdfasdfdecess"
      },
      age: 1232312321
    }).then(function() {
      console.log("Frank fdf");
    });

// const docRef = db.collection('users').doc('xxxeeeeeeeeeeeee');
// const res = await docRef.update({
//     color:"red",
//     name: "Đinh Kiều Ngọc Anh"
//   });

})();
