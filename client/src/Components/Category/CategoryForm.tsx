import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {
  Button, Input, Select, Row, Col, notification
} from 'antd';
import { GetCategories } from './CategoryPage';
import { Category } from 'Model';

const AddCategory = gql`
  mutation AddCategory($name: String!, $parent: ID)
  {
    addCategory(name: $name, parent: $parent)
    {
      id
      name
      parent
    }
  }
`;

type Props = {
  categories: Category[]
};

const CategoryRootParent = '<<null>>';

function CategoryForm({ categories }: Props)
{
  const [categoryName, setCategoryName] = useState('');
  const [categoryParent, setCategoryParent] = useState(CategoryRootParent);
  const [addCategory] = useMutation(AddCategory, {
    refetchQueries: [{ query: GetCategories }],
    onCompleted: data => notification.success({
      message: `Kategorie ${data.addCategory.name} erstellt`,
      duration: 5,
      placement: 'bottomRight'
    }),
    onError: () => notification.error({
      message: 'Fehler beim Erstellen der Kategorie :(',
      duration: 5,
      placement: 'bottomRight'
    }),
  });

  const handleAddCategory = () =>
  {
    const variables = {
      name: categoryName,
      parent: categoryParent === CategoryRootParent ? null : categoryParent
    };

    addCategory({ variables });
  };

  return (
    <Row gutter={[8, 0]}>
      <Col flex='0 1 300px'>
        <Input
          placeholder='Name'
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
        />
      </Col>
      <Col flex='0 0 210px'>
        <Select value={categoryParent} onChange={e => setCategoryParent(e.toString())} style={{ width: '100%' }}>
          <Select.Option key={CategoryRootParent} value={CategoryRootParent}>Root</Select.Option>
          {categories.map(c => <Select.Option key={c.id} value={c.id}>{c.name}</Select.Option>)}
        </Select>
      </Col>
      <Col flex='0 0 80px'>
        <Button onClick={() => handleAddCategory()}>Erstellen</Button>
      </Col>
    </Row>
  );
}

export { CategoryForm };