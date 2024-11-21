import React, { useState } from "react";
import "../style.css";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const [dictionaryResult, setDictionaryResult] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Clear Text
  const handleClear = () => {
    setText("");
    props.showAlert(": Cleared the text", "success");
  };

  // Download Text as File
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([Text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    props.showAlert(": Text downloaded as a file", "success");
  };

  // Convert to Uppercase
  const handleUpcase = () => {
    if (Text.length === 0)
      return props.showAlert(": Enter some text to perform your task", "warning");
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert(": Your text converted to uppercase", "success");
  };

  // Convert to Lowercase
  const handleLocase = () => {
    if (Text.length === 0)
      return props.showAlert(": Enter some text to perform your task", "warning");
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert(": Your text converted to lowercase", "success");
  };

  // Remove Extra Spaces
  const handleRvexsp = () => {
    if (Text.length === 0)
      return props.showAlert(": Enter some text to perform your task", "warning");
    let newText = Text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert(": Removed extra spaces from your text", "success");
  };

  // Capitalize Per Word
  const handle1stc = () => {
    if (Text.length === 0)
      return props.showAlert(": Enter some text to perform your task", "warning");
    let newText = Text.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert(": Capitalized each word in your text", "success");
  };

  // Copy Text
  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert(": Text copied to clipboard", "success");
  };

  // Dictionary Functionality
  const handleDictionary = async () => {
    if (Text.trim().split(" ").length > 1) {
      return props.showAlert(": Please enter only one word to find its meaning", "warning");
    }
    const word = Text.trim();
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      if (response.ok) {
        setDictionaryResult(data[0].meanings[0].definitions[0].definition);
        props.showAlert(": Word meaning fetched successfully", "success");
      } else {
        setDictionaryResult("Word not found in the dictionary.");
        props.showAlert(": Word not found", "warning");
      }
    } catch (error) {
      setDictionaryResult("Failed to fetch word meaning.");
      props.showAlert(": Failed to fetch dictionary data", "danger");
    }
  };

  // Word and Character Count
  const wordCount = Text.split(/\s+/).filter((element) => element.length !== 0).length;

  const textColor = { color: props.mode === "dark" ? "white" : "#2c2556" };

  return (
    <div className="container">
      <div style={textColor}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#444" : "white",
            color: props.mode === "dark" ? "white" : "#2c2556",
          }}
          rows="8"
        ></textarea>
        <div className="formButton mt-3">
          <button className="btn btn-primary mx-1" onClick={handleUpcase} disabled={Text.length === 0}>
            Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLocase} disabled={Text.length === 0}>
            Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleRvexsp} disabled={Text.length === 0}>
            Remove Spaces
          </button>
          <button className="btn btn-primary mx-1" onClick={handle1stc} disabled={Text.length === 0}>
            Capitalize
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopy} disabled={Text.length === 0}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleDictionary} disabled={Text.length === 0}>
            Find Meaning
          </button>
          <button className="btn btn-primary mx-1" onClick={handleDownload} disabled={Text.length === 0}>
            Download Text
          </button>
        </div>
      </div>

      <div className="container my-3" style={textColor}>
        <h2>Text Summary</h2>
        <p>
          <strong>Word Count:</strong> {wordCount} <br />
          <strong>Character Count:</strong> {Text.length} <br />
        </p>

        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter text above to preview it"}</p>

        <h2>Dictionary Result</h2>
        <p>{dictionaryResult}</p>
      </div>
    </div>
  );
}
