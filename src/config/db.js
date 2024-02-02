const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const ssm = new AWS.SSM({ apiVersion: "2014-11-06" });

exports.initMongoDB = () => {
  const mongodbUrl = (async () => {
    const ssmParam = await ssm.getParameter({
      Name: process.env.DATABASE_SSM_KEY,
      WithDecryption: true
    }).promise();
    return ssmParam.Parameter.Value;
  })();

  mongodbUrl.then((url)=>{
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connection established");
      })
      .catch((err) => {
        console.log("error", err);
      });
  }).catch((e) =>{
    console.log("Error retrieving the database url",e)
  })
};