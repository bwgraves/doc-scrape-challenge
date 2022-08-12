# smtp_min_data_rate (default:500); 

 The minimum plaintext data transfer rate in bytes/second for
DATA requests, when deadlines are enabled with smtp_per_request_deadline.
After a write operation transfers N plaintext message bytes (possibly
after TLS encryption), and after the DATA request deadline is
decremented by the elapsed time of that write operation, the DATA
request deadline is incremented by N/smtp_min_data_rate seconds.
However, the deadline will never be incremented beyond the time
limit specified with smtp_data_xfer_timeout.  

 This feature is available in Postfix 3.7 and later. 


