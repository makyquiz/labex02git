import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

export default function EditArticle() {
  const { urlId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      const ref = doc(db, 'articles', urlId);
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) {
        const data = snapshot.data();
        setTitle(data.title);
        setAuthor(data.author);
        setDescription(data.description);
      }
    }
    fetchArticle();
  }, [urlId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = doc(db, 'articles', urlId);
    await updateDoc(ref, { title, author, description });
    navigate('/');
  }

  return (
    <div className="edit">
      <h2>Edit Article</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          <span>Author:</span>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          <span>Description:</span>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <button className="btn">Update</button>
      </form>
    </div>
  );
}
