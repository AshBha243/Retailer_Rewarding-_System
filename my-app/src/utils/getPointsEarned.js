
export const getPointsEarned = (amount) => {

    let points = 0;
    if (amount <= 50) return 0;
    if (amount > 50 && amount <= 100) {
        points = amount - 50;
    }
    else {
        points = 50 + ((amount - 100) * 2)
    }
    return points;

}

export const getMonth = (month) => {
     console.log(month.toLowerCase())
    switch (month.toLowerCase()) {
       
        case 'january':
            return '01';
        case 'february':
            return '02';
        case 'march':
            return '03';
        case 'april':
            return '04';
        case 'may':
            return '05';
        case 'june':
            return '06';
        case 'july':
            return '07';
        case 'august':
            return '08';
        case 'september':
            return '09';
        case 'october':
            return '10';
        case 'november':
            return '11';
        case 'december':
            return '12';
        default:
            return "sorry! month data missing";
    }
}

export const getCustomerByMonthTansaction = (Transactions, month) => {
    const transaction = Transactions["transactions"];
    let customersData =[];
    customersData = transaction.filter(trans => trans.date.split('-')[0] === getMonth(month));
    return customersData;
}
