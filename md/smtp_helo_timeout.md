# smtp_helo_timeout (default:300s) 


The Postfix SMTP client time limit for sending the HELO or EHLO command,
and for receiving the initial remote SMTP server response.


 Specify a non-zero time value (an integral value plus an optional
one-letter suffix that specifies the time unit).  Time units: s
(seconds), m (minutes), h (hours), d (days), w (weeks).
The default time unit is s (seconds).  


