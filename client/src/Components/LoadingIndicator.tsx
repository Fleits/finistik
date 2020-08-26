import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type Props = {
  overlay: boolean
};

const LoadingIndicatorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  ${(props: Props) => (props.overlay ? `
    position: 'absolute';
    top: 0;
    background: '#dedede90';
  ` : '')}
`;

function LoadingIndicator({ overlay = false}: Props)
{
  return (
    <LoadingIndicatorWrapper overlay={overlay}>
      <LoadingOutlined />
    </LoadingIndicatorWrapper>
  );
}

export { LoadingIndicator };