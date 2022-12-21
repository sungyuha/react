import React from 'react';
// styled는 styled-components에서 임포트 하는 객체 -> Button메소드에 접근 가능
import styled from 'styled-components';

import './Button.css';

// styled-components 별로 고유 -> 스타일이 지정 됨
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }
  
  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`; // button 은 stylde 객체의 메소드*/

/*const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};*/

export default Button;
