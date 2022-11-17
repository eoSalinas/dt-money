import { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionsContext'

export function useTransaction() {
  return useContext(TransactionContext)
}
