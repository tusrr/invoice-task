import React from "react";
import "./Invoice.css";
import Footer from "./Footer";
import { InvoiceData } from "./InvoiceData";
const Invoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-header">
        <div className="invoice-title">
          <h1>TAX INVOICE</h1>
          <p>Date: 2022-04-02</p>
        </div>
        <div className="invoice-number">
          <p>Bill No.: 116</p>
        </div>
      </div>

      <div className="customer-info">
        <div className="customer-details">
          <p>
            <strong>M/s. :</strong> MOTILAL AJAY KUMAR
          </p>
          <p>SHAH COMPLEX</p>
          <p>4TH FLOOR NEAR HATHWA MARKET</p>
          <p>Ph: 9334120891</p>
          <p>GST: 10ADOPA1540J1Z4</p>
        </div>
        <div className="supply-info">
          <p>
            <strong>Place Of Supply:</strong> Patna
          </p>
          <p>
            <strong>Terms Of Delivery:</strong> Lorem Ipsum
          </p>
        </div>
      </div>

      <div className="agent-info">
        <p>
          <strong>Agent Name:</strong> KHATA+ SOL. PVT. LTD.
        </p>
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Quality</th>
            <th>Description Of Goods</th>
            <th>Company</th>
            <th>Hsn</th>
            <th>Than</th>
            <th>P/M</th>
            <th>Rate</th>
            <th>Amt</th>
            <th>Less</th>
            <th>Add</th>
            <th>Tot.Amt</th>
          </tr>
        </thead>
        <tbody>
          {InvoiceData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.quality}</td>
              <td>{item.description}</td>
              <td>{item.company}</td>
              <td>{item.hsn}</td>
              <td>{item.than}</td>
              <td>{item.pm}</td>
              <td>{item.rate}</td>
              <td>{item.amt}</td>
              <td>{item.less}</td>
              <td>{item.add}</td>
              <td>{item.totAmt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="invoice-summary">
        <p>Taxable Value: 32000</p>
        <p>Add IGST: 1600</p>
        <p>RoundOff: 0</p>
        <p>
          <strong>Total: 33600</strong>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Invoice;
