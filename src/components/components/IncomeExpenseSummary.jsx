import { useSelector } from 'react-redux';
import { formatCurrency } from '../utils/formatCurrency.js';

const IncomeExpenseSummary = () => {
    const transactions = useSelector((state) => state.transactions.transactions);

    const income = transactions
        .filter(t => t.amount > 0)
        .reduce((acc, curr) => acc + curr.amount, 0);

    const expense = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <h3 className="text-sm text-green-600 font-medium">INCOME</h3>
                <p className="text-xl font-semibold text-green-700 mt-1">
                    {formatCurrency(income)}
                </p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <h3 className="text-sm text-red-600 font-medium">EXPENSE</h3>
                <p className="text-xl font-semibold text-red-700 mt-1">
                    {formatCurrency(Math.abs(expense))}
                </p>
            </div>
        </div>
    );
};

export default IncomeExpenseSummary