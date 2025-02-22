import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../store/transactionSlice.jsx';

const AddTransactionForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim() || !amount) return;

        const transaction = {
            text,
            amount: type === 'income' ? +amount : -amount,
            date: new Date().toISOString(),
        };

        dispatch(addTransaction(transaction));
        setText('');
        setAmount('');
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">New Transaction</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter description..."
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Amount
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0.00"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Type
                        </label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default AddTransactionForm;