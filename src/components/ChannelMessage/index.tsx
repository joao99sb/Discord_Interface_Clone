import React from 'react'
import { Container,Avatar, Header,Message, Content} from './styles'
export interface Props{
  author:string
  date:string
  content:string | React.ReactElement | React.ReactNode
  mention?:boolean
  isBot?:boolean
}

const ChannelMessage:React.FC<Props> = ({
  author,
  content,
  mention,
  isBot,
  date
}) => {
  return(
   <Container className={mention? 'mentioned':''}>
     <Avatar className={isBot ? 'bot' : ''} />

     <Message>

      <Header>
        <strong>{author}</strong>
        {isBot && <span>Bot</span>}
        <time>{date}</time>
      </Header>
      <Content>
        {content}
      </Content>

     </Message>
    </Container>
  )
}

export default ChannelMessage
