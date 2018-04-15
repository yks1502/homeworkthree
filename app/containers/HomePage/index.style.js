import React from 'react';
import styled from 'styled-components';

export const UpperBarWrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: rgba(255,255,255,.97);
  border-bottom: solid 1px rgba(0,0,0,.2);
  flex-direction: row;
  align-items: center;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  width: 375px;
  height: 200px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

export const Input = styled.input`
  width: 300px;
  height: 36px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #dbdbdb;
  margin-top: 24px;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 36px;
  border-radius: 3px;
  background-color: #2066be;
  margin-top: 20px;
  cursor: pointer;
`;


export const LoginText = styled.text`
  width: 46px;
  height: 17px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const UsernameText = styled.text`
  width: 100px;
  height: 36px;
  font-size: 20px;
  text-align: center;
  color: #000000;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

export const LogoutButton = styled.button`
  width: 200px;
  height: 36px;
  border-radius: 3px;
  background-color: #B8EE9E;
  margin-top: 20px;
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  margin-left: 20px;
  margin-top: 100px;
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const DatePickerWrapper = styled.div`
  width: 100px;
  height: 50px;
`;

export const DateText = styled.text`
  width: 100px;
  margin-left: 20px;
  height: 36px;
  font-size: 20px;
  align-items: row;
`;

export const CreateButton = styled.button`
  width: 100px;
  height: 36px;
  border-radius: 3px;
  background-color: #dbdbdb;
  margin-top: 20px;
  cursor: pointer;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

export const User2Input = styled.select`
  width: 460px;
  height: 45px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #cccccc;
  margin-top: 20px;
`;
