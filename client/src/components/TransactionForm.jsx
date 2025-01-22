import React, { useState } from "react";

const TransactionForm = ({ onSubmit, initialData = {} }) => {
    const [label, setLabel] = useState(initialData.label || "");
    const [amount, setAmount] = useState(initialData.amount || "");
    const [category, setCategory] = useState(initialData.category || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ label, amount, date, category });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Label */}
                <div>
                    <label htmlFor="label" className="block text-sm font-medium text-gray-700">
                        Label
                    </label>
                    <input
                        id="label"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="ex : Grocery shopping"
                        required
                    />
                </div>

                {/* Amount */}
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Amount
                    </label>
                    <input
                        id="amount"
                        type="number"
                        step="0.01"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="ex : 150.00"
                        required
                    />
                </div>



                {/* Category */}
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        id="category"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select a category
                        </option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Travel">Travel</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {initialData.id ? "Update Transaction" : "Add Transaction"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TransactionForm;
