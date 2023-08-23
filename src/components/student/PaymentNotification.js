
function PaymentNotifcation() {
    const payments = [
      { id: 1, amount: '$500', date: 'March 1, 2023' },
      { id: 2, amount: '$400', date: 'February 1, 2023' },
      { id: 3, amount: '$300', date: 'January 1, 2023' },
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 my-4">
        <h2 className="text-xl font-bold mb-4">My Payments</h2>
        <ul className="list-disc list-inside">
          {payments.map(payment => (
            <li key={payment.id} className="mb-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">{`Payment of ${payment.amount}`}</p>
                <p className="text-sm text-gray-500">{payment.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default PaymentNotifcation;
  