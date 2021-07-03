// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ytdl from 'ytdl-core';
import fs from 'fs';



export default async function handler(req, res) {

  const pattern = /^.*(youtu.be\/|watch|v=)([^#\&\?]*).*/gi;
  const { urlYT } = req.body
  if(!urlYT || !pattern.test(urlYT)) return res.redirect('/')
  // Create WriteableStream
  
const writeableStream = fs.createWriteStream(`./public/videos/${urlYT.split("v=")[1]+'.'+req.body.format}`);

// Listening for the 'finish' event
writeableStream .on('finish', () => {
  console.log(`${urlYT} downloaded successfully`);
res.redirect(`/videos/${urlYT.split("v=")[1]+'.'+req.body.format}`)
});


ytdl(urlYT, {
  format: req.body.format,
  quality: 'highestaudio'
}).pipe(writeableStream);
  

}
