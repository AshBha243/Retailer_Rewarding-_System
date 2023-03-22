import React, {useState, useEffect} from 'react';
import  Transactions from '../../src/database/db.json';
import { getPointsEarned } from '../utils/getPointsEarned';


function TransactionList() {
    const[data, setData] = useState([]);
    useEffect(() => {
        setData(Transactions["transactions"]);
    },[])
  

  return (
    <div className ="transactionList">
   <h2> <strong>TransactionList</strong></h2>
   
   
    <table>
        <thead>
            <tr>
                <th>Transaction_Id</th>
                <th>Date</th>
                <th>Time</th>
                <th>Customer_Id</th>
                <th>Amount</th>
                <th>PointsEarned</th>
            </tr>            
        </thead>
        <tbody>
        { data.length > 0 ? (
          
          data.map((transaction,index) => (                  
                <tr key={index}>
                    <td>{transaction.transId}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.time}</td>
                    <td>{transaction.custId}</td>
                    <td>{transaction.amount}</td>
                    <td>{getPointsEarned(transaction.amount)}</td>
                </tr>
                  ))
                ):
            <tr>
                <td>...Loading</td>
            </tr>    
    
    }
    </tbody>
    </table>
    </div>
  )
}

export default TransactionList