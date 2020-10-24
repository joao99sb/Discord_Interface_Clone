import React from 'react'
import { Container,Role,User,Avatar } from './styles'

interface UserTDO{
  nickname:string
  isBot?:boolean

}

const UserRoll: React.FC<UserTDO> = ({nickname,isBot})=>{
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}


const UserList:React.FC = () => {
  return(
   <Container>
     <Role>Disponível - 2</Role>
     <UserRoll nickname="bot de gravação" isBot/>
     <UserRoll nickname="bot de musica" isBot/>

     <Role>Ofline - 12</Role>
     <UserRoll nickname="Juninho"/>
     <UserRoll nickname="Seu zé"/>
     <UserRoll nickname="Gabbriel"/>
     <UserRoll nickname="jogador1"/>
     <UserRoll nickname="jogador2"/>
     <UserRoll nickname="jogador3"/>
     <UserRoll nickname="jogador4"/>
     <UserRoll nickname="jogador5"/>
     <UserRoll nickname="jogador6"/>
     <UserRoll nickname="jogador7"/>
     <UserRoll nickname="jogador8"/>
     <UserRoll nickname="jogador9"/>
    </Container>
  )
}

export default UserList
