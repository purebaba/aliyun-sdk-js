var batchcompute = require('./batchcompute');

/**
*
*/
var jobId = 'job-00000000559638EC00005F780000069A';

batchcompute.startJob({JobId:jobId},function(err, data) {
  console.log(err || data);
});
