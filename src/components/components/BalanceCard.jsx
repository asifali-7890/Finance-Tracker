import { useSelector } from 'react-redux';
import { formatCurrency } from '../utils/formatCurrency';

const BalanceCard = () => {
    const transactions = useSelector((state) => state.transactions.transactions);
    const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h2 className="text-gray-500 text-lg font-medium">Current Balance</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">
                {formatCurrency(total)}
            </p>
        </div>
    );
};


export default BalanceCard