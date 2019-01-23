const PDFDocument = require('pdfkit');
const fs = require('fs');

function createBanglaPdf(content) {
  let doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('output.pdf'));
  doc.font('fonts/bangla1.ttf').fontSize(14);
  doc.text(content, 100, 100);
  doc.end();
}


createBanglaPdf(`
  একটি বাংলাদেশ তুমি জাগ্রত জনতার,
  সারা বিশ্বের বিষ্বয় তুমি আমার অহংকার!
`);


