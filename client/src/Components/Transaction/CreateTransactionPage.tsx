import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Form } from 'antd';
import { toValidAmount } from 'Helper/Converter';
import { Notify } from 'Components/Notify';
import { GetCategories } from 'Components/Category/Query';
import { GetTransactions } from 'Components/Transaction/Query';
import { CreateTransactionForm, FormValues } from './CreateTransactionForm';

const AddTransaction = gql`
  mutation AddTransaction($date: String, $detail: String, $amount: Int, $categories: [ID])
  {
    addTransaction(date: $date, detail: $detail, amount: $amount, categories: $categories)
    {
      id
      date
      detail
      amount
      categories 
      {
        id
        name
      }
    }
  }
`;

function CreateTransactionPage()
{
  const [form] = Form.useForm();
  const { loading: categoriesLoading, data: { categories: availableCategories = [] } = {} } = useQuery(GetCategories);
  const [addTransaction] = useMutation(AddTransaction, {
    refetchQueries: [{ query: GetTransactions }],
    onCompleted: () =>
    {
      Notify.success('Ausgabe gebucht');
      form.resetFields();
    },
    onError: () => Notify.error('Fehler beim Erstellen der Buchung :(')
  });

  const handleSubmit = ({
    date, amount, detail, categories = []
  } : FormValues) =>
  {
    const variables = {
      date: date.format('YYYY-MM-DD'),
      amount: toValidAmount(amount),
      detail,
      categories
    };

    addTransaction({ variables });
  };

  return (
    <CreateTransactionForm
      form={form}
      categoriesLoading={categoriesLoading}
      categories={availableCategories}
      onSubmit={handleSubmit}
    />
  );
}

export { CreateTransactionPage };