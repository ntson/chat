import { useEffect, useRef, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import ChatMessage from '../components/ChatMessage';
import NewMessage from '../components/NewMessage';
import Spinner from '../components/Spinner';

const Home = () => {
  const [allMessages, setAllMessages] = useState([]);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const q = query(collection(firestore, 'messages'), orderBy('createdAt'));

    const unsub = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((m) => {
        messages.push({ id: m.id, ...m.data() });
      });
      setAllMessages(messages);
    });

    return unsub;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      <div className="w-11/12 max-w-md flex flex-col gap-4 overflow-scroll max-h-[80vh]">
        {allMessages.length === 0 && <Spinner text="gray-900" />}

        {allMessages &&
          allMessages.map((m) => {
            return <ChatMessage key={m.id} message={m} />;
          })}

        <div ref={messagesEndRef}></div>
      </div>

      <div className="w-11/12 max-w-md">
        <NewMessage />
      </div>
    </main>
  );
};

export default Home;
