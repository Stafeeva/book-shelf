### Book Shelf ###

Express - MongoDB - React - Redux project

### Notes ###

Curl POST request example:

```
curl -v http://localhost:3000/api/books POST -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}'
```

For pretty printed json:

```
curl -v http://localhost:3000/api/books | jq
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
db.books.insert({ title: "Example Title" })
```
```
db.books.remove({ title: "Example Title" })
```
```
exit
```

### Useful links ###

https://flaviocopes.com/mongodb/

https://flaviocopes.com/node-mongodb/
