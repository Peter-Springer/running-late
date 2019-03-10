var CronJob = require('cron').CronJob;
console.log('Before job instantiation');
const job = new CronJob('47 11 * * *', function() {
	const d = new Date();
	console.log('Job executed at ', d);
});
console.log('After job instantiation');
job.start();
