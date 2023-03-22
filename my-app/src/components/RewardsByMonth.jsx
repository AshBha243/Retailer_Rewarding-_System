import React, { useState } from 'react'
import { getPointsEarned, getCustomerByMonthTansaction } from '../utils/getPointsEarned'
import Transactions from '../../src/database/db.json';

function RewardsByMonth() {

    const [month, setMonth] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const getDataByMonth = (e) => {
      
        if(e.keyCode === 13) {
            console.log("key", e.keyCode);
            setMonth(e.target.value);
            console.log("month", e.target.value);
            setData(getCustomerByMonthTansaction(Transactions, e.target.value));
            console.log("data", data);
        }      
    }

    return (
        <div className="rewardsByMonth">
            <h2> <strong>Reaward Per Month</strong></h2>
            <div>
                <label>Filter by month:</label>
                <input type="text" onKeyDown={(e) => getDataByMonth(e)} placeholder='December or december'></input>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Customer_Id</th>
                        <th>Date</th>
                        <th>Monthly Point</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                            data.map((transaction, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{transaction.custId}</td>
                                        <td>{transaction.date}</td>
                                        <td>{getPointsEarned(transaction.amount)}</td>
                                    </tr>
                                )
                            })
                        )
                            :
                            <tr><td>Sorry no data found for the month {month}</td></tr>

                   
                    }
                </tbody>

            </table>





        </div>

    )


}

export default RewardsByMonth