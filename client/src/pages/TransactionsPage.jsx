import React from "react";
import '../App.css';  // Importer les styles de App.css
import TransactionForm from "../components/TransactionForm";

const TransactionPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold text-oxford_blue">Create a New Transaction</h2>
                <TransactionForm />
            </div>
        </div>
    );
};

export default TransactionPage;
