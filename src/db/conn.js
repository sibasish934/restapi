const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student-api',
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
).then(() => {
    console.log('connection successful with mongodb');
}).catch((e) => {
    console.log(e);
});