import React from 'react';
import { Divider } from 'antd';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import { LoadingIndicator } from 'Components/LoadingIndicator';
import { CategoryTree } from './CategoryTree';
import { CategoryForm } from './CategoryForm';

export const GetCategories = gql`
  query categories {
    categories {
      id
      name
      parent
    }
  }
`;

const Overlay = styled.div`
  position: 'absolute';
  top: 0;
  width: '100%';
  height: '100%';
  background: '#dedede90';
`;

function CategoryPage()
{
  const { loading, error, data: { categories = [] } = {} } = useQuery(GetCategories, { fetchPolicy: 'cache-and-network' });

  if(error) return <p>Error!</p>;

  return (
    <div style={{ position: 'relative' }}>
      <CategoryForm categories={categories} />
      <Divider />
      <CategoryTree categories={categories} />
      {loading && (
        <Overlay>
          <LoadingIndicator />
        </Overlay>
      )}
    </div>
  );
}

export { CategoryPage };