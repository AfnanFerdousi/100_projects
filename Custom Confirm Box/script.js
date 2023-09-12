let books = []
app.post('/books', (req,res) => {
  const {title, publishedDate, author} = req.body;
  const id = Math.floor(Math.random() * Math.random())

  const data = {id,  title, publishedDate, author};
  books.push(data)
  res.send(data)
})