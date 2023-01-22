import React,  { useState } from 'react';
import Layout from '@theme/Layout';



export default function MyReactPage() {
  const [fontSize, setFontSize] = useState(16);
  let [start, setStart] = useState(0);
  let size = 500
  const [fileSlide, setFileSlide] = useState('');

  const [fileContent, setFileContent] = useState('');

  const [hideScrollbar, setHideScrollbar] = useState(false);

   const getContent = async (start) => {
    if(fileContent.length<= 1){
      console.log(`reading file............`);
      const response = await fetch('/mcontent/mreact.txt');
      let text = await response.text();
      setFileContent(text)
    }
    
    if(start < fileContent.length && start >= 0){
    
      let end = start+size > start+fileContent.length ? fileContent.length:start+size;
      console.log(`start....${start} and end.... ${end}`);
      setStart(start)
      setFileSlide(fileContent.substring(start, end))     
    }

  }

  const IncreaseFont = () =>{
    setFontSize(fontSize + 2)
    
    console.log(`window.scrollbars.visible ${window.scrollbars.visible}`);
    
  }

  const deCreaseFont = () =>{
    setFontSize(fontSize - 2)
    
    console.log(`window.scrollbars.visible ${window.scrollbars.visible}`);
    
  }

  function handleClick() {
    setHideScrollbar(!hideScrollbar);
    document.body.style.overflow = hideScrollbar ? "auto" : "hidden";
}


  return (
    <Layout>
      <h1>my book</h1>
      <p>free flow text</p>

      <div>
      <button onClick={handleClick}>Toggle Scrollbar</button>

        <button onClick={() => getContent(start+size)}>Next</button>
        <button onClick={() => getContent(start-size)}>Back</button>

        <button onClick={() => IncreaseFont()}>Increase Font</button>
        <button onClick={() => deCreaseFont()}>decrease Font</button>

        <p style={{ fontSize: `${fontSize}px` }}>
          {fileSlide}
        </p>
      </div>

    </Layout>
  );
}

