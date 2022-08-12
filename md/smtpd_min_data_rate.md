# smtpd_min_data_rate (default:500) 

 The minimum plaintext data transfer rate in bytes/second for
DATA and BDAT requests, when deadlines are enabled with
smtpd_per_request_deadline. After a read operation transfers N
plaintext message bytes (possibly after TLS decryption), and after
the DATA or BDAT request deadline is decremented by the elapsed
time of that read operation, the DATA or BDAT request deadline is
incremented by N/smtpd_min_data_rate seconds. However, the deadline
will never be incremented beyond the time limit specified with
smtpd_timeout.  

 This feature is available in Postfix 3.7 and later. 


