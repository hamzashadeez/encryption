import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import React from "react";
import Encrypt from "./Encrypt";
import Decrypt from "./Decrypt";

function App() {
  const [encrypt, setEncrypt] = React.useState(true)
  return (
    <div className="App container">
      <Header />
      <div className="bg-white p-4 mb-4">
        <h6 className='text-muted'>Select Action</h6>
        <Form.Select onChange={()=> setEncrypt(!encrypt)} aria-label="Floating label select example" >
          <option value="1">Encryption </option>
          <option value="2">Decryption </option>
        </Form.Select>
      </div>
      <div className="bg-white p-4 mb-4">
        {encrypt? <Encrypt /> : <Decrypt />}
      </div>
    </div>
  );
}

export default App;
