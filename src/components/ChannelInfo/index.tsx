import React from 'react'

import { Container, Title, HashtagIcon,Separator, Description} from './styles'


const ChannelInfo:React.FC = () => {
  return(
   <Container>
     <HashtagIcon/>
     <Title>geral</Title>
     <Separator/>
     <Description>Esse projeto foi muito legal de se criar</Description>
    </Container>
  )
}

export default ChannelInfo
