import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Spinner({size,color}) {
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: size,
            color : color,
          }}
          
        />
      );
  return (
    <Spin indicator={antIcon} />
  )
}
