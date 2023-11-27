import React from 'react';
import './InputField.css'
import { Input } from '@mui/base/Input';
import { Button } from '@mui/base/Button';

const inputField = ({message,setMessage,sendMessage}) => { // 3개의 props를 받음
    return (
        <div className='input-area'>
            <div className='plus-button'>+</div>
            <form onSubmit={sendMessage} className='input-container'> {/* 폼 */}
                <Input // 입력창
                    placeholder='메세지를 입력하세요.'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)} // 값이 변경되면 onChange 이벤트가 호출되어 setMessage안에서 (event.target.value)가 값을 바꿔줌
                    multiline={false}
                    rows={1}
                />

                <Button // 버튼
                    disabled={message === ''}
                    type='submit' // onSubmit호출
                    className='send-button'
                >
                    전송
                </Button>
            </form>
        </div>
    );
}

export default inputField;