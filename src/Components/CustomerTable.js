import React from 'react'

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const CustomerTable = () => {
 

    const [id, setId] = useState("");
    const [Name, setName] = useState("");
    const [ InvestmentAmount, setInvestmentAmount] = useState("");
    const [ AgeOfInvestment, setAgeOfInvestment] = useState("");
    const [ AgeOfInterest, setAgeOfInterest] = useState("");
    const [  InterstPaid, setInterstPaid] = useState("");
    const [  TotalReturns, setTotalReturns] = useState("");
  
    const handleSubmit = (e) => {
  
      e.preventDefault();
      fetch(`http://localhost:8000/detailes`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ id,Name, InvestmentAmount,AgeOfInvestment,AgeOfInterest,InterstPaid,TotalReturns })
      }).then((response) => {
        console.log("saved")
      }).catch((err) => { console.log(err.message) })
  
  
      alert("Added blog successfully")
  
      setId("");
      setName("");
      setInvestmentAmount("");
      setAgeOfInvestment("");
      setAgeOfInterest("");
      setInterstPaid("");
      setTotalReturns("");
    }
  
  return (
    <div>
      <h1>Customer Table</h1>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>investment Amount</th>
                <th>Age Of investment</th>
                <th>Age Of Interest(in months)</th>
                <th>Interest Pending</th>
                <th>Total Returns</th>
            </tr>

        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}

export default CustomerTable
