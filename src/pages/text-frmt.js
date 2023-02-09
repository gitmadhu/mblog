import React,  { useState } from 'react';
import Layout from '@theme/Layout';



export default function MyReactPage() {
  
  const [itemName, setItemName] = useState('Subs');
  const [source, setSource] = useState('{ "nameTest":"hello"}');
  const [target, setTarget] = useState('');


  const handleClick = () => {
    if(source){
    const sourceText = JSON.parse(source);
    const result = getDataToItem(sourceText);

    if(result && result.length > 0){
      setTarget(result.join("\n"))
    }
    }
    
  }

  const getDataToItem = (data) => {
    if(data ){
      let result = [];
      Object.keys(data).forEach(key => result.push(`${itemName}Item.${getCapitalChars(key)} = ${itemName}Data.${key}`) )
      return result;
    }
  }

  const getCapitalChars = (key) => {
    let result = key.split(/(?=[A-Z])/)
    if(result && result.length > 0){
      let caps = []
      result.forEach(key => caps.push( key.toUpperCase(key)))
      return caps.join("_");
    }
    return key.toUpperCase;
  }
  const getItemToData = (item) => {
  }

  const getCamelCaseObj = (upperCaseObj) => {
    let camelCaseObj =   {};
    
    Object.keys(upperCaseObj).forEach(key => camelCaseObj[getCamelCaseKey(key)] =upperCaseObj[key] )
    return camelCaseObj;
  }

  const getCamelCaseKey = (key) => {
    const capitalWords = key.split("_");
    let camelCaseArray = []
    capitalWords.forEach(word => 
      // to lowercase entire word then to uppercase first char
      camelCaseArray.push( word.toLowerCase().replace(/^\w/, c => c.toUpperCase()))
      )
      // to lower case first char of result to make it camelcase
      return camelCaseArray.join("").replace(/^\w/, c => c.toLowerCase());
  }

  return (
    <Layout>
      <h1>Classic editor</h1>
      <h2> <button onClick={handleClick}>transform text</button></h2>
      <h2> Item name: <input onClick={handleClick} value={itemName} onChange={e => setItemName(e.target.value)} /></h2>

      <textarea name="source" id="source" value={source} rows="15" cols="50" onChange={e => setSource(e.target.value)} />
      <textarea name="target" id="target" value={target} rows="15" cols="50"/>
    </Layout>
  );
}

