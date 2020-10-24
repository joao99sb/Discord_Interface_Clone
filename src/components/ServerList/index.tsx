import React from 'react';
import {Container, Separator} from './styles';
import ServerButton from '../ServerButton'

const ServerList:React.FC=()=>{
  return(

  <Container>
    <ServerButton isHome/>

    <Separator/>

    <ServerButton/>
    <ServerButton hasNotifications />
    <ServerButton/>
    <ServerButton mentions={5}/>
    <ServerButton/>
    <ServerButton hasNotifications/>
    <ServerButton/>
    <ServerButton mentions={20}/>

  </Container>
  )
};

export default ServerList;
