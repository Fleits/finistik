import React from 'react';
import { Divider } from 'antd';
import { useQuery } from '@apollo/client';
import { LoadingIndicator } from 'Components/LoadingIndicator';
import { CategoryTree } from './CategoryTree';
import { CategoryForm } from './CategoryForm';
import { GetCategories } from './Query';

function CategoryPage()
{
  const { loading, error, data: { categories = [] } = {} } = useQuery(GetCategories, { fetchPolicy: 'cache-and-network' });

  if(error) return <p>Error!</p>;

  return (
    <div style={{ position: 'relative' }}>
      <CategoryForm categories={categories} />
      <Divider />
      <CategoryTree categories={categories} />
      {loading && (<LoadingIndicator overlay />)}
    </div>
  );
}

export { CategoryPage };