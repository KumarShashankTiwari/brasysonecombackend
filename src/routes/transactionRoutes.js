const express = require('express');
const {
  createTransaction,
  getTransactionById,
  updateTransactionStatus,
} = require('../controllers/transactionController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createTransaction);
router.get('/:id', protect, getTransactionById);
router.put('/:id', protect, admin, updateTransactionStatus);

module.exports = router;
