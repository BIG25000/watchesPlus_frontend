import React, { useState } from "react";
import axios from "axios";

function TrackingTest() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);

  const searchNow = () => {
    if (trackingNumber.length <= 0) {
      alert("Please fill tracking number");
    } else {
      axios
        .post(
          "https://trackapi.thailandpost.co.th/post/api/v1/authenticate/token",
          null,
          {
            headers: {
              Authorization: "Token {YOUR_TOKEN}",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.token && response.data.expire) {
            const token = response.data.token;
            const data = {
              status: "all",
              language: "TH",
              barcode: [trackingNumber],
            };

            axios
              .post("http://localhost:5173/admin/trackingtest", data, {
                headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
                },
              })
              .then((response) => {
                if (response.data.message === "successful") {
                  const trackingItems =
                    response.data.response.items[trackingNumber];
                  setTrackingData(trackingItems);
                } else {
                  alert("Something went wrong!");
                }
              })
              .catch((error) => {
                console.log(error);
                alert("Something went wrong!");
              });
          } else {
            alert("Something went wrong!");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong!");
        });
    }
  };

  return (
    <div className="p-5">
      <h1>Tracking</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-4">
          <span>Tracking number</span>
          <input
            id="txt_tracking"
            type="text"
            className="form-control"
            placeholder="XXXXXXXXXX"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          <div className="mt-3 d-flex justify-content-end">
            <button onClick={searchNow} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
        <div id="render" className="col-12 col-sm-8">
          {trackingData &&
            trackingData.map((item, index) => (
              <div
                key={index}
                className={`card ${
                  item.status === "501" ? "bg-success" : "bg-primary"
                } text-white p-3 mb-3`}
              >
                <div
                  className="d-flex justify-content-between mb-2"
                  style={{ borderBottom: "1px solid #adadad" }}
                >
                  <span>สถานะ</span>
                  <span>{item.status_description}</span>
                </div>
                <div
                  className="d-flex justify-content-between mb-2"
                  style={{ borderBottom: "1px solid #adadad" }}
                >
                  <span>สถานที่</span>
                  <span>{item.location}</span>
                </div>
                <div
                  className="d-flex justify-content-between mb-2"
                  style={{ borderBottom: "1px solid #adadad" }}
                >
                  <span>เวลา</span>
                  <span>{item.status_date}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TrackingTest;
