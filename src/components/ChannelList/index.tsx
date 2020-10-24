import React from 'react'
import { Container, Category, AddCategoryIcons, } from './styles'
import ChannelButton from '../ChannelButton'

const ChannelList:React.FC = () => {
  return(
   <Container>
     <Category>
       <span>Canais de texto</span>
       <AddCategoryIcons/>
     </Category>

     <ChannelButton channelName='geral' selected />
     <ChannelButton channelName='vagas de emprego'/>
     <ChannelButton channelName='discussões sobre tecnologias'/>
     <ChannelButton channelName='canal para jogar lolzinho '/>
    </Container>
  )
}

export default ChannelList
