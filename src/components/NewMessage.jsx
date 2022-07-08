import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../lib/firebase';

const NewMessage = () => {
  const [content, setContent] = useState('');
  const [currentUser] = useAuthState(auth);

  const addNewMessage = async (e) => {
    e.preventDefault();

    await addDoc(collection(firestore, 'messages'), {
      content,
      createdAt: Timestamp.fromDate(new Date()),
      user: {
        uid: currentUser.uid,
        displayName: currentUser.displayName,
      },
    });

    setContent('');
  };

  return (
    <form onSubmit={addNewMessage}>
      <input
        className="border border-gray-400 rounded-md outline-none focus:border-blue-600 w-full mb-4 p-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type new message"
      />
      <input type="submit" hidden />
    </form>
  );
};

export default NewMessage;
