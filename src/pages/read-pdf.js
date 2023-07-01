import React,  { useState } from 'react';
import pdfjsLib from 'pdfjs-dist';
import Layout from '@theme/Layout';
export default function MyReactPage() {
  
  const [pdfText, setPdfText] = useState("");

  async function handleFileUpload(event) {
    const file = event.target.files[0];
    const fileText = JSON.stringify(file);
    const text =  await extractPdfText(file);
    setPdfText("text: "+fileText);
  }

  async function extractPdfText(file) {
    const response = await fetch('/mcontent/udemy micro services certificate.pdf');
    const fileData = await response.arrayBuffer();
    const pdfDoc = await pdfjsLib.getDocument(fileData).promise;
    setPdfText("text: "+pdfDoc.numPages);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = async () => {
        try {
          //const typedarray = new Uint8Array(reader.result);
          const pdf = await pdfjsLib.getDocument(fileData).promise;
          const page = await pdf.getPage(10);
          const content = await page.getTextContent();
          const text = content.items.map(item => item.str).join('');
          resolve(text);
        } catch (err) {
          reject(err);
        }
      };
      
    });
  }
  

  return (
      <Layout>
        <h1>Classic editor</h1>
        <form>
        <label>
          Upload a PDF file:
          <input type="file" accept="application/pdf" onChange={handleFileUpload} />
        </label>
      </form>
      <div>result: <p>{pdfText}</p></div>
      </Layout>
  );
}

