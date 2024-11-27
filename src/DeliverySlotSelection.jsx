import React, { useState } from "react";

const DeliverySlotSelection = () => {
  const [status, setStatus] = useState(""); // For tracking parcel status
  const [trackingId, setTrackingId] = useState("");
  const [deliverySlot, setDeliverySlot] = useState("");
  const [address, setAddress] = useState({
    state: "",
    city: "",
    landmark: "",
    road: ""
  });

  const handleSlotChange = (e) => {
    setDeliverySlot(e.target.value);
  };

  const handleTrackParcel = () => {
    // Logic for tracking parcel and updating status
    setStatus("In Transit"); // Example status update
  };

  const handleAddressChange = (e) => {
    const { id, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <div className="container">
      <h1>Delivery Slot Selection and Parcel Tracking</h1>

      <div className="delivery-slot-selection">
        <h2>Select your preferred delivery time slot:</h2>
        <ul>
          <li>
            <input
              type="radio"
              id="morning"
              name="delivery-slot"
              value="morning"
              onChange={handleSlotChange}
            />
            <label htmlFor="morning">Morning (9am-12pm)</label>
          </li>
          <li>
            <input
              type="radio"
              id="afternoon"
              name="delivery-slot"
              value="afternoon"
              onChange={handleSlotChange}
            />
            <label htmlFor="afternoon">Afternoon (12pm-3pm)</label>
          </li>
          <li>
            <input
              type="radio"
              id="evening"
              name="delivery-slot"
              value="evening"
              onChange={handleSlotChange}
            />
            <label htmlFor="evening">Evening (3pm-6pm)</label>
          </li>
        </ul>
        <button id="submit-slot">Submit</button>
      </div>

      <div className="parcel-tracking">
        <h2>Enter your tracking ID to view the latest updates on your parcel's status:</h2>
        <input
          type="text"
          id="tracking-id"
          placeholder="Enter tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <button id="track-parcel" onClick={handleTrackParcel}>
          Track Parcel
        </button>
        <div id="parcel-status">
          <p>
            Your parcel is currently: <span id="status">{status}</span>
          </p>
        </div>
        <div id="map" style={{ width: "100%", height: "300px" }}></div>
      </div>

      <div className="container">
        <h2>Delivery Status</h2>
        <div className="status">
          <input type="checkbox" />
          <label>Ordered Day, Date, Month</label>
        </div>
        <div className="status">
          <input type="checkbox" />
          <label>Shipped</label>
        </div>
        <div className="status">
          <input type="checkbox" />
          <label>Out for delivery</label>
        </div>
        <div className="status">
          <input type="checkbox" />
          <label>Arriving by Date, Month</label>
        </div>
        <div className="tracking">
          <h3>Tracking ID: 34400083145</h3>
          <p>Shipping Address:</p>
          <div id="address">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              value={address.state}
              onChange={handleAddressChange}
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={address.city}
              onChange={handleAddressChange}
            />
            <label htmlFor="landmark">Landmark:</label>
            <input
              type="text"
              id="landmark"
              value={address.landmark}
              onChange={handleAddressChange}
            />
            <label htmlFor="road">Road No.:</label>
            <input
              type="text"
              id="road"
              value={address.road}
              onChange={handleAddressChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySlotSelection;
