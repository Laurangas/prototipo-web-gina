const express = require('express');
const cors = require('cors');
const port = 4200;
const app = express();
const fs=require("fs");
const qrcode=require("qrcode");

const urlCv="https://automaga.umizoomi.tk";

const run=async()=> {
  const QR=await qrcode.toDataURL(urlCv)
  const htmlContent=`
  <div style="display: flex; justify-content: center; align-items: center;">
  <h2>QR Umizumi</h2>
  <img src="${QR}">
  </div>
  `;
  fs.writeFileSync('./qra.html',`${htmlContent}`)
}

run()
app.use(cors());

app.use(express.static('dist'));

app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});
