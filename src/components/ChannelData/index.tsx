import React,{useRef,useEffect} from 'react'
import { Container, Messages, InputWrapper, Input} from './styles'
import {Mention} from '../ChannelMessage/styles'
import ChannelMessage from '../ChannelMessage'

const ChannelData:React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>
  useEffect(()=>{
    const div = messageRef.current
    if(div){
      div.scrollTop = div.scrollHeight;

    }
  },[messageRef])

  return(
   <Container>
     <Messages ref={messageRef}>
       {Array.from(Array(10).keys()).map(number=>[
         <ChannelMessage
          key={number}
          author="CEO"
          date="24/10/2020"
          content="Trabalho incível, queremos você em nossa equipe"
          />
       ])}


       <ChannelMessage author="Bot de Musica" content={
         <>
         <Mention>@Joao Victor</Mention>, qual música você deseja?
         </>

         } date="24/10/2020" isBot mention/>

     </Messages>


     <InputWrapper>
     <Input placeholder="interaja no chat"/>

     </InputWrapper>
    </Container>
  )
}

export default ChannelData
