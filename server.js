const express = require('express')
const app = express('path')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(_dirname + '/dist/ngproject'));
app.get('/', (req, res) => res.sendfile(path.join(_dirname + '/dist/ngproject/index.htmt'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))