import { useState, useEffect } from "react";
import "./App.css";

const App = function () {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  const statusGroups = [
    {
      code: 100,
    },
    {
      code: 200,
    },
    {
      code: 300,
    },
    {
      code: 400,
    },
    {
      code: 500,
    },
  ];

  const initialStatusCodes = [
    { code: 100, name: "Continue" },
    { code: 101, name: "Switching Protocols" },
    { code: 102, name: "Processing" },
    { code: 103, name: "Early Hints" },
    { code: 200, name: "OK" },
    { code: 201, name: "Created" },
    { code: 202, name: "Accepted" },
    { code: 203, name: "Non-Authoritative Information" },
    { code: 204, name: "No Content" },
    { code: 205, name: "Reset Content" },
    { code: 206, name: "Partial Content" },
    { code: 207, name: "Multi-Status" },
    { code: 208, name: "Already Reported" },
    { code: 214, name: "Transformation Applied" },
    { code: 226, name: "IM Used" },
    { code: 300, name: "Multiple Choices" },
    { code: 301, name: "Moved Permanently" },
    { code: 302, name: "Found" },
    { code: 303, name: "See Other" },
    { code: 304, name: "Not Modified" },
    { code: 305, name: "Use Proxy" },
    { code: 307, name: "Temporary Redirect" },
    { code: 308, name: "Permanent Redirect" },
    { code: 400, name: "Bad Request" },
    { code: 401, name: "Unauthorized" },
    { code: 402, name: "Payment Required" },
    { code: 403, name: "Forbidden" },
    { code: 404, name: "Not Found" },
    { code: 405, name: "Method Not Allowed" },
    { code: 406, name: "Not Acceptable" },
    { code: 407, name: "Proxy Authentication Required" },
    { code: 408, name: "Request Timeout" },
    { code: 409, name: "Conflict" },
    { code: 410, name: "Gone" },
    { code: 411, name: "Length Required" },
    { code: 412, name: "Precondition Failed" },
    { code: 413, name: "Payload Too Large" },
    { code: 414, name: "Request-URI Too Long" },
    { code: 415, name: "Unsupported Media Type" },
    { code: 416, name: "Request Range Not Satisfiable" },
    { code: 417, name: "Expectation Failed" },
    { code: 418, name: "I’m a teapot" },
    { code: 420, name: "Enhance Your Calm" },
    { code: 421, name: "Misdirected Request" },
    { code: 422, name: "Unprocessable Entity" },
    { code: 423, name: "Locked" },
    { code: 424, name: "Failed Dependency" },
    { code: 425, name: "Too Early" },
    { code: 426, name: "Upgrade Required" },
    { code: 428, name: "Precondition Required" },
    { code: 429, name: "Too Many Requests" },
    { code: 431, name: "Request Header Fields Too Large" },
    { code: 444, name: "No Response" },
    { code: 450, name: "Blocked by Windows Parental Controls" },
    { code: 451, name: "Unavailable For Legal Reasons" },
    { code: 497, name: "HTTP Request Sent to HTTPS Port" },
    { code: 498, name: "Token expired/invalid" },
    { code: 499, name: "Client Closed Request" },
    { code: 500, name: "Internal Server Error" },
    { code: 501, name: "Not Implemented" },
    { code: 502, name: "Bad Gateway" },
    { code: 503, name: "Service Unavailable" },
    { code: 504, name: "Gateway Timeout" },
    { code: 506, name: "Variant Also Negotiates" },
    { code: 507, name: "Insufficient Storage" },
    { code: 508, name: "Loop Detected" },
    { code: 509, name: "Bandwidth Limit Exceeded" },
    { code: 510, name: "Not Extended" },
    { code: 511, name: "Network Authentication Required" },
    { code: 521, name: "Web Server Is Down" },
    { code: 522, name: "Connection Timed Out" },
    { code: 523, name: "Origin Is Unreachable" },
    { code: 525, name: "SSL Handshake Failed" },
    { code: 530, name: "Site Frozen" },
    { code: 599, name: "Network Connect Timeout Error" },
  ];

  const [statusCodes, setStatusCodes] = useState(initialStatusCodes);

  const filterImages = (index) => {
    if (index === 0) {
      setOne(true);
      handleShuffle();
    }
    if (index === 1) {
      setTwo(true);
      handleShuffle();
    }
    if (index === 2) {
      setThree(true);
      handleShuffle();
    }
    if (index === 3) {
      setFour(true);
      handleShuffle();
    }
    if (index === 4) {
      setFive(true);
      handleShuffle();
    }
  };

  const shuffleArray = (arr) => {
    let shuffledArray = [...arr];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleShuffle = () => {
    setStatusCodes(shuffleArray(statusCodes));
  };

  return (
    <div className="App">
      <h1 className="title">HTTP Cat</h1>
      <div className="button-list">
        {statusGroups.map((num, index) => (
          <li
            className="num-btn"
            key={index}
            onClick={(e) => filterImages(index)}
          >
            {num.code}
          </li>
        ))}
      </div>

      {one && (
        <ul className="list">
          {statusCodes.map((pic, index) => (
            <li id="one" key={index}>
              {pic.code < 200 && (
                <img src={`https://http.cat/${pic.code}.jpg`} alt="100 cat" />
              )}
            </li>
          ))}
        </ul>
      )}

      {two && (
        <ul className="list">
          {statusCodes.map((pic, index) => (
            <li id="two" key={index}>
              {pic.code < 300 && pic.code >= 200 && (
                <img src={`https://http.cat/${pic.code}.jpg`} alt="200 cat" />
              )}
            </li>
          ))}
        </ul>
      )}

      {three && (
        <ul className="list">
          {statusCodes.map((pic, index) => (
            <li id="three" key={index}>
              {pic.code < 400 && pic.code >= 300 && (
                <img src={`https://http.cat/${pic.code}.jpg`} alt="300 cat" />
              )}
            </li>
          ))}
        </ul>
      )}

      {four && (
        <ul className="list">
          {statusCodes.map((pic, index) => (
            <li id="four" key={index}>
              {pic.code < 500 && pic.code >= 400 && (
                <img src={`https://http.cat/${pic.code}.jpg`} alt="400 cat" />
              )}
            </li>
          ))}
        </ul>
      )}

      {five && (
        <ul className="list">
          {statusCodes.map((pic, index) => (
            <li id="five" key={index}>
              {pic.code >= 500 && (
                <img src={`https://http.cat/${pic.code}.jpg`} alt="500 cat" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
