const Transaction = require('../models/Transaction');
const Order = require('../models/order');
const User = require('../models/User');

const createTransaction = async (userId, orderId, amount) => {
  try {
    const transaction = new Transaction({
      user: userId,
      order: orderId,
      amount,
    });

    await transaction.save();
    return transaction;
  } catch (error) {
    throw new Error('Error creating transaction');
  }
};

const getTransactionById = async (transactionId) => {
  try {
    const transaction = await Transaction.findById(transactionId).populate('user order');
    return transaction;
  } catch (error) {
    throw new Error('Transaction not found');
  }
};

const updateTransactionStatus = async (transactionId, status) => {
  try {
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      throw new Error('Transaction not found');
    }

    transaction.status = status;
    transaction.updatedAt = Date.now();
    await transaction.save();
    return transaction;
  } catch (error) {
    throw new Error('Error updating transaction status');
  }
};

module.exports = {
  createTransaction,
  getTransactionById,
  updateTransactionStatus,
};
