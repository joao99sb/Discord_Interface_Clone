import styled from 'styled-components';
import {AlternateEmail} from 'styled-icons/material'
export const Container = styled.div`

  grid-area:CD;


  display:flex;
  flex-direction:column;
  justify-content:space-between;

  background:var(--primary);
  padding:0 11px 0 16px;


`
export const Messages = styled.div`
  padding:20px 0;

  display:flex;
  flex-direction:column;

  max-height:calc( 100vh - 46px - 68px);

  overflow-y:scroll;

  ::-webkit-scrollbar{
    width:4px;
  }
  ::-webkit-scrollbar-thumb{
    background-color:var(--tertiary);
    border-radius:4px;
  }
  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
  }



`
export const InputWrapper = styled.div`
  width:100%;

  padding:0 16px;

`
export const Input = styled.input`
  width:100%;
  height:44px;

  padding:0 10px 0 57px;

  border-radius: 7px;
  color: #fff;
  background-color:var(--chat-input);
  position:relative;
  font-size:16px;
  &::placeholder{
    color: var(--gray);

    font-size:16px;
    line-height: 19px;
  }

  &+svg{
    position:relative;
    top: -50%;
    left:14px;

    transition: 180ms ease-in-out;
  }
`
export const InputIcon = styled(AlternateEmail)`
  height:24px;
  width:24px;
  color:var(--gray);
`

