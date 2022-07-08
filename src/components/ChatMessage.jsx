import { deleteDoc, doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../lib/firebase';
import ConditionalShow from './ConditionalShow';
import Delete from './Delete';

const ChatMessage = ({ message }) => {
  const [user] = useAuthState(auth);

  const deleteMessage = () => deleteDoc(doc(firestore, 'messages', message.id));

  return (
    <div className="border border-gray-400 rounded-md p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-sm">{message.user.displayName}</p>
        <ConditionalShow show={user && user.uid === message.user.uid}>
          <Delete onClick={deleteMessage} />
        </ConditionalShow>
      </div>
      <p>{message.content}</p>
    </div>
  );
};

export default ChatMessage;
