import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
    margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsvalid] = useState(true);
  // 값이 true이면, 입력값이 유효하고 

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // trim는 시작이나 끝 부분에 과도하게 쓰인 공백을 제거해주는 매소드
    // 유효하지 않으면 setIsvalid를 호출
    if (enteredValue.trim().length === 0) {
      setIsvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl>
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{
          borderColor: !isValid ? 'red' : '#ccc',
          backhround: !isValid ? 'salmon' : 'transparent'
          }} 
          type="text" onChange={goalInputChangeHandler} />
      {/* </div> */}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
