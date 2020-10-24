import styled from 'styled-components';
import {Hashtag} from 'styled-icons/heroicons-outline'
import {PersonAdd, Settings} from 'styled-icons/material'
import {Props} from '.'

export const Container = styled.div<Props>`
  display:flex;
  align-items:center;
  justify-content:space-between;

  cursor:pointer;

  padding: 5px 3px;
  border-radius:5px;

  background-color:transparent;

  transition: background-color 300ms;


  >div{
    display:flex;
    align-items:center;


  }
  >div span{
    color :var(--senary);
    margin-left:5px;
  }

  &:hover, &.active{

    background-color:var(--quinary);

    >div span{
      transition:color 200ms ;
      color:#fff;

    }
    > div svg{
      transition:  200ms;
      opacity:1;

    }
  }



`

export const HashtagIcon= styled(Hashtag)`

  width:20px;
  height:20px;

  color:var(--symbol);

`
export const InvateIcon = styled(PersonAdd)`
  width:16px;
  height:16px;

  opacity:0;

  color:var(--symbol);
  cursor: pointer;

  transition:color 200ms;
  &:hover{
    color:#fff;
  }
  margin-right:4px;

`
export const SettingsIcon = styled(Settings)`
    width:16px;
  height:16px;

  color:var(--symbol);
  cursor: pointer;

  transition:color 200ms;
  &:hover{
    color:#fff;
  }
  opacity:0;
`
