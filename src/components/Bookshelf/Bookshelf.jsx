import { useState } from 'react';
function Bookshelf() {
const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
const [newBook, setNewBook] = useState({ title: " ", author: " "});
      
const handleInputChange = (event) => {
          const { name, value } = event.target;
          setNewBook({ ... newBook, [name]: value });
      };
const handleSubmit = (event) => {
            event.preventDefault();
            setBooks([... books, newBook]);
            setNewBook({ title: " ", author: " " });
};

  return (
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
            <input 
            id='title'
            type="text" 
            name="title" 
            value={newBook.title} 
            onChange={handleInputChange}
             />
  
        <label htmlFor='author'>Author:</label>
            <input 
            id='author'
            type="text" 
            name="author" 
            value={newBook.author} 
            onChange={handleInputChange} 
            />
        <button type='submit'>Add Book</button>

    </form>
    </div>
    <div className="bookCardsDiv">
        <ul>
            {books.map((books, index) => (
                <li key={index}>
                    <h3>{books.title}</h3>
                    <p>{books.author}</p>
                </li>     
            ))}  
        </ul>
    </div>
    </div>
  );

}   


export default Bookshelf