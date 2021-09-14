import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import uuid from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { db } from "./Firebase";

function Encrypt() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [showId, setShowID] = useState(false);
  const [id, setId] = useState("");

  const startCounting = () => {
    setLoading(true);
    setShowID(false);
    setTimeout(() => {
      setCount(40);
    }, 1500);
    setTimeout(() => {
      setCount(80);
    }, 4000);
    setTimeout(() => {
      setCount(95);
    }, 6000);
    setTimeout(() => {
      setCount(100);
    }, 7000);
    setTimeout(() => {
      setLoading(false);
      setCount(0);
      setShowID(true);
    }, 8500);
  };

  const submit = (e) => {
    e.preventDefault();
    setValue("");
    startCounting();
    let newid = uuid().substring(9, 23);
    setId(newid);
    localStorage.setItem(newid, value);
    // localStorage.setItem(id.toString(), value);
  };
  return (
    <div>
      <h6 className="text-muted">Enter the value you want to encrypt</h6>
      <Form className="d-flex mb-4" onSubmit={(e) => submit(e)}>
        <Form.Control
          type="text"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="enter sensitive value here"
        />
        <button type="submit" className="btn btn-primary px-4">
          Encrypt
        </button>
      </Form>
      {loading ? (
        <ProgressBar
          striped
          variant="success"
          now={count}
          label={count + "%"}
        />
      ) : (
        ""
      )}

      {showId ? (
        <div className="bg-light p-3 d-flex justify-content-between">
          <h2 className="text-muted">{id}</h2>
          <CopyToClipboard text={id} onCopy={() => alert("Copied")}>
            <button className="btn btn-dark">Copy to clipboard</button>
          </CopyToClipboard>
          {/* <button className='btn btn-dark px-4'>Copy</button> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Encrypt;
