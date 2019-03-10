const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 5000
const io = require('socket.io')(server, { origins: '*:*'})
const mongoose = require('mongoose')
const path = require("path")
const CronJob = require('cron').CronJob;
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/RUNNING_LATE', { useNewUrlParser: true })

const job = new CronJob('47 11 * * *', () => {
	const d = new Date();
	console.log('Job executed at ', d);
});

job.start()

io.on('connection', (socket) => {

  socket.on('getEmployees', () => {
		console.log('WOWOWOWOWOW ')
  })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});

server.listen(port, () => {
	console.log(`Socket Server is running on http://localhost:${port}`)
})
