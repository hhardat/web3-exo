const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://hhardat:${password}@cluster0.rlxtj58.mongodb.net/phonebook?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')
    if(process.argv.length > 4) {
        const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
        })

        person.save().then(() => { mongoose.connection.close() })
    } else {
        Person.find({}).then(result => {
            result.forEach(person => {
                console.log(person)
            })
            mongoose.connection.close()
        })
    }
  })
  .then(() => {
    console.log(`Added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
  })
  .catch((err) => console.log(err))