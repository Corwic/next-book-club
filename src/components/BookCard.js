export default function BookCard ({ data: book }) {
  return (
  <>
    <p>
      <strong>{book.title}</strong> — {book.author?.name}
    </p>
  </>
)}
