import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Amount in Words: Rs. Thirty Three Thousand Six Hundred Only.</p>
      <div className="footer-details">
        <div className="footer-left">
          <p>Goods sent to: MAA ANNAPURNA</p>
          <p>L.R.No: 5022325982*1</p>
          <p>L.R.Date: 2022-04-04 12:00:00</p>
          <p>CASE No: 116</p>
        </div>
        <div className="footer-right">
          <p>E.&O.E.</p>
          <p>For: BANSIWALA FABRICS PVT LTD</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
