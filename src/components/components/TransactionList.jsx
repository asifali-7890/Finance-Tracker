import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../store/transactionSlice';
import { formatCurrency } from '../utils/formatCurrency';

const TransactionList = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions.transactions);

    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Transaction History</h2>
            <div className="space-y-3">
                {transactions.map((transaction, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div>
                            <p className="font-medium text-gray-800">{transaction.text}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(transaction.date).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {formatCurrency(transaction.amount)}
                            </span>
                            <button
                                onClick={() => dispatch(deleteTransaction(index))}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TransactionList