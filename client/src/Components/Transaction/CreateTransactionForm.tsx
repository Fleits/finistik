import React from 'react';
import {
  Form, Input, InputNumber, DatePicker, Button, Select
} from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Moment } from 'moment';
import { Category } from 'Model';
import { Today } from 'Helper/Format';

type Props = {
  form: FormInstance
  categoriesLoading: boolean
  categories: Category[]
  onSubmit: (values: FormValues) => void
};

type FormValues = {
  date: Moment, amount: number, detail: string, categories: string[]
};

function CreateTransactionForm({
  form, categoriesLoading, categories, onSubmit
}: Props)
{
  return (
    <Form
      form={form}
      onFinish={onSubmit}
      layout='horizontal'
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item name='date' label='Datum' initialValue={Today}>
        <DatePicker defaultValue={Today} />
      </Form.Item>
      <Form.Item name='amount' label='Betrag'>
        <InputNumber autoFocus decimalSeparator=',' precision={2} />
      </Form.Item>
      <Form.Item name='detail' label='Detail'>
        <Input />
      </Form.Item>
      <Form.Item name='categories' label='Kategorien'>
        <Select
          placeholder='Select a option and change input text above'
          mode='multiple'
          allowClear
          loading={categoriesLoading}
        >
          {categories.map((c: Category) => <Select.Option key={c.id} value={c.id}>{c.name}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Hinzufügen
        </Button>
      </Form.Item>
    </Form>
  );
}

export type { FormValues };
export { CreateTransactionForm };