import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const LoadingIndicatorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

function LoadingIndicator()
{
  return (
    <LoadingIndicatorWrapper>
      <LoadingOutlined />
    </LoadingIndicatorWrapper>
  );
}

export { LoadingIndicator };