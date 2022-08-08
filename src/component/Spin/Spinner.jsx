import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Spinner({size}) {
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: size,
          }}
          
        />
      );
  return (
    <Spin indicator={antIcon} />
  )
}
