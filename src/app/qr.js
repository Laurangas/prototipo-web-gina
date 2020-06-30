const fs=require("fs");
const qrcode=require("qrcode");

const urlCv="https://automaga.umizoomi.tk";

const run=async()=> {
  const QR=await qrcode.toDataURL(urlCv)
  const htmlContent=`
  <div style="display: flex; justify=content: center; align=items: center;">
  <h2>QR Umizumi</h2>
  <img src="${QR}">
  </div>
  `;
  fs.writeFileSync('./qr.html',`${htmlContent}`)
}

run()
