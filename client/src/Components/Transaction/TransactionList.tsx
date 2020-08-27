import React from 'react';
import { Table, Tag } from 'antd';
import { formatAmount, formatDate } from 'Helper/Format';
import { Transaction, Category } from 'Model';

const columns = [
  {
    title: 'Datum',
    dataIndex: 'date',
    key: 'date',
    render: (date: string) => formatDate(date),
  },
  {
    title: 'Detail',
    dataIndex: 'detail',
    key: 'detail'
  },

  {
    title: 'Betrag',
    key: 'amount',
    dataIndex: 'amount',
    render: (amount: number) => formatAmount(amount),
  },
  {
    title: 'Kategorien',
    dataIndex: 'categories',
    key: 'categories',
    render: (categories: Category[]) => categories.map((c: Category) => <Tag key={c.id}>{c.name}</Tag>)
  }
];

type Props = {
  transactions:Transaction[]
};

function TransactionList({ transactions }: Props)
{
  return <Table columns={columns} dataSource={transactions} rowKey='id' />;
}

export { TransactionList };