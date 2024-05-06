import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow 
        projectId='
        a88f36f0-d9ca-4bf4-989d-cbad194bfd40'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}} 
      />
    </div>
  )
}

export default ChatsPage;