import styled from 'styled-components';
import {Mic,Headset,Settings} from 'styled-icons/material'
export const Container = styled.div`
  grid-area:UI;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:var(--quaternary);

  padding:10px;
  box-shadow:0px 1px 0px 0px rgba(0, 0, 0, 0.5);

`
export const UserData = styled.div`
  display:flex;
  align-items:center;
`

export const UserPhoto = styled.div`
  width:32px;
  height:32px;
  border-radius:50%;
  background-color:var(--gray);
  margin-right:8px;

`

export const Profile = styled.div`
  display:flex;
  flex-direction:column;
  >strong{
    font-size:13px;
    color:#fff;
    display:block;
  }
  >span{
    font-size:13px;
    color:var(--gray);
  }
`


export const Icons = styled.div`
  display:flex;
  align-items:center;
  align-content:center;

  >svg+svg{
    margin-left:7px;
  }

`

export const MicIcon = styled(Mic)`
  width:20px;
  height:20px;
  color:#fff;
  opacity:0.7;
  cursor: pointer;
  transition:opacity 200ms;
  &:hover{
    opacity:1;
  }
`
export const HeadseatIcon = styled(Headset)`
  width:20px;
  height:20px;
  color:#fff;
  opacity:0.7;
  cursor: pointer;
  transition:opacity 200ms;
  &:hover{
    opacity:1;
  }
`
export const SettingsIcon = styled(Settings)`
  width:20px;
  height:20px;

  color:#fff;
  opacity:0.7;
  cursor: pointer;
  transition:opacity 200ms;
  &:hover{
    opacity:1;
  }
`
