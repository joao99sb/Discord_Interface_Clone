import React from 'react'
import { Container, UserData,Profile,Icons,UserPhoto , MicIcon, HeadseatIcon, SettingsIcon } from './styles'


const UserInfo:React.FC = () => {
  return(
   <Container>
     <UserData>
      <UserPhoto/>
      <Profile>
       <strong>Joao Victor</strong>
       <span>#1234</span>
      </Profile>
     </UserData>
     <Icons>
       <MicIcon/>
       <HeadseatIcon/>
       <SettingsIcon/>
     </Icons>
    </Container>
  )
}

export default UserInfo
