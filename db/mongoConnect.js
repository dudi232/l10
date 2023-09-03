const mongoose = require("mongoose");
// יאפשר לאפליקציה לקרוא משתנים מקובץ
// ENV ששם יש משתנים סודיים כגון התחברות למסד
// והמילה הסודית טוקן
require("dotenv").config();

main().catch((err) => console.log(err));

async function main() {
  // console.log(process.env.TEST_VAR);

  // await mongoose.connect('mongodb://127.0.0.1:27017/idf9');

  // process.env.MONGO_DB -> מגיע מהקובץ .env
  await mongoose.connect(process.env.MONGO_DB);
  // await mongoose.connect('mongodb+srv://koko9:MONKE@cluster0.jfgkq.mongodb.net/idf9');
  console.log("mongo connect idf9 atlas");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
