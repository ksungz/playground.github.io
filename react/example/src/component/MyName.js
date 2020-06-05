import React, { Component } from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요. 저는 <strong>{name}</strong> 입니다.
    </div>
  )
}

// MyName.defaultProps = {
//   name: '기본이름'
// }
export default MyName;