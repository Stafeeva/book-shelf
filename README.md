### Book Shelf ###

Express - MongoDB - React - Redux project

### Notes ###

How to start: run

```
npm i
npm start
```
and go to localhost:3000.

Curl POST request example:

```
curl -v http://localhost:3000/api/books POST -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}'
```

For pretty printed json:

```
curl -v http://localhost:3000/api/books | jq
```
Curl UPDATE request example:

```
curl -X PUT -H "Content-Type: application/json" -d '{"title":"1984"}' http://localhost:3000/api/books/1980
```
Curl DELETE request example:

```
curl -v http://localhost:3000/api/books/1984 -X DELETE
```

To run MongoDB:

```
brew services start mongodb
```

MongoDB commands:

```
mongo
```
```
use books
```
```
show collections
```
```
db.books.find()
```
```
db.books.insert({title: "Example Title"})
```
```
db.books.remove({title: "Example Title"})
```
```
db.books.update({title: "Old Title"}, {title: "New Title"})
```
```
exit
```

### Useful links ###

https://flaviocopes.com/mongodb/

https://flaviocopes.com/node-mongodb/

### Features I am building ###

#### Version 1 ####

1. User can add a book to a list.
2. User can set a status of a book: 'to read', 'finished', 'reading'.

### Version 2 ###

3. User can edit a book.
4. Book list has 3 columns: "To read", "Reading", "Finished".
