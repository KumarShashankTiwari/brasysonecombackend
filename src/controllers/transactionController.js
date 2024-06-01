const transactionService = require('../services/transactionService');

exports.createTransaction = async (req, res) => {
  const { orderId, amount } = req.body;

  try {
    const transaction = await transactionService.createTransaction(req.user._id, orderId, amount);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTransactionById = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await transactionService.getTransactionById(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTransactionStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const transaction = await transactionService.updateTransactionStatus(id, status);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
