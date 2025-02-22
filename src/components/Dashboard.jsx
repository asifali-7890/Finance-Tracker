import { Provider } from 'react-redux';
import { store } from './app/store';
import BalanceCard from './components/BalanceCard.jsx';
import IncomeExpenseSummary from './components/IncomeExpenseSummary.jsx';
import TransactionList from './components/TransactionList.jsx';
import AddTransactionForm from './components/AddTransactionForm.jsx';

export const Dashboard = () => {
    return (
        <Provider store={store}>
            <div className="max-w-2xl mx-auto p-4 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Financial Dashboard</h1>
                <BalanceCard />
                <IncomeExpenseSummary />
                <TransactionList />
                <AddTransactionForm />
            </div>
        </Provider>
    );
};