import React from "react";
import { Table } from "react-bootstrap";

import './Footer2.css'
function FooterMenu2() {
   const colStyle = {
    width:"700px",
    
    
   }
  return (
    <div>
    <Table borderless style={{marginLeft:"40px", textAlign:"left", fontSize:"14px"}}>
  <thead>
    <tr>
      <th style={colStyle}>About Us</th>
      <th style={colStyle}>Careers</th>
      <th style={colStyle}>Social Impact</th>
      <th style={colStyle}>For Business Partners</th>
      <th style={colStyle}>Order and Pick Up</th>
      <th style={colStyle}></th>
      <th style={colStyle}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Our Company</td>
      <td>Culture and Values</td>
      <td>People</td>
      <td>Landlord Support Center</td>
      <td>Order on the App</td>
    </tr>
    <tr>
      <td>Our Coffee</td>
      <td>Inclusion, Diversity, and Equity</td>
      <td>Planet</td>
      <td>Suppliers</td>
      <td>Order on the Web</td>
    </tr>
    <tr>
      <td>Stories and News</td>
      <td >College Achievement Plan</td>
      <td>Environment and Social Impact Reporting</td>
      <td>Corporate Gift Card Sales</td>
      <td>Delivery</td>
    </tr>
    <tr>
        <td>Starbucks Archive</td>
        <td>Alumni Community</td>
        <td></td>
        <td>Office and Foodservice Coffee</td>
        <td>Order and Pickup Options</td>
    </tr>
    <tr>
        <td>Investor Relations</td>
        <td>U.S. Careers</td>
        <td></td>
        <td></td>
        <td>Explore and Find Coffee for Home</td>
    </tr>
    <tr>
        <td>Contact Us</td>
        <td>International Careers</td>
    </tr>
  </tbody>
</Table>
    
</div>
  );
}

export default FooterMenu2;
