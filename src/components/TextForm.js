import React, { useState } from 'react'


export default function TextForm(props) {
  
  const handleclick1=()=>{
   // console.log("uppercase clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    let text1=document.getElementById("formid1");
    if(text1.value>'')
    props.showalert("Converted to UpperCase","success");
    else
    props.showalert("Please write Something","warning");
  }
  const handleclick2=()=>{
   // console.log("Lowercase clicked");
    let newtext=text.toLowerCase();
    setText(newtext);
    let text1=document.getElementById("formid1");
    if(text1.value>'')
    props.showalert("Converted to LowerCase","success");
    else
    props.showalert("Please write Something","warning");
  }
  const handlechange=(event)=>{
    //console.log("handle change");
    setText(event.target.value);
  }

  const handleclick3=()=>{
    let newtext=''
    setText(newtext);
    let text1=document.getElementById("formid1");
    if(text1.value>'')
    props.showalert("Text is Cleared","success");
    else
    props.showalert("Nothing to Clear","warning");
  }

  const handleclick4=()=>{
    var text=document.getElementById('formid1');
    text.select();
    navigator.clipboard.writeText(text.value);
    let text1=document.getElementById("formid1");
    if(text1.value>'')
    props.showalert("Copied to Clipboard","success");
    else
    props.showalert("Nothing to Copy","warning");
  }

  const handleclick5=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    let text1=document.getElementById("formid1");
    if(text1.value>'')
    props.showalert("Removed Extra Spaces","success");
    else
    props.showalert("Nothing to Remove","warning");
  }
    
  const [text, setText]= useState(''); 
 
  const remov=(text)=>{
  if(text==='')
  return 0;
  else
  return text.trim().split(/\s+/).length;
  
  }
  return (
    <>
    <div className="mb-3">
        <h2>{props.head}</h2>
         <textarea rows="10" cols="60" value={text} onChange={handlechange} className="textf" id="formid1" placeholder="Enter here"/>
         <input type="button" className="butn"  id="formid2" onClick={handleclick1} value="Click here for Uppercase"></input> 
         <input type="button" className="butn1" id="formid3" onClick={handleclick2} value="Click here for Lowercase"></input>   
         <input type="reset"  className="butn2" id="formid4" onClick={handleclick3} value="Clear"></input> 
         <input type="button" className="butn3" id="formid5" onClick={handleclick4} value="Copy Text"></input> 
         <input type="button" className="butn4" id="formid6" onClick={handleclick5} value="Remove Extra Spaces"></input>   
   </div>
   <div className="Conatiner">
    <h4>Summary</h4>
    <p> {remov(text)} Words {text.length} Characters</p>
    <h4>Preview</h4>
    <p>{text}</p>
   </div>
    </>
  )
}
