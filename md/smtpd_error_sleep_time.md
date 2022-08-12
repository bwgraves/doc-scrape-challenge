# smtpd_error_sleep_time (default:1s); 

With Postfix version 2.1 and later: the SMTP server response delay after
a client has made more than $smtpd_soft_error_limit errors, and
fewer than $smtpd_hard_error_limit errors, without delivering mail.


With Postfix version 2.0 and earlier: the SMTP server delay
before sending a reject (4xx or 5xx) response, when the client has
made fewer than $smtpd_soft_error_limit errors without delivering
mail. When the client has made $smtpd_soft_error_limit or more errors,
delay all responses with the larger of (number of errors) seconds
or $smtpd_error_sleep_time. 

 Specify a non-negative time value (an integral value plus an optional
one-letter suffix that specifies the time unit).  Time units: s
(seconds), m (minutes), h (hours), d (days), w (weeks).
The default time unit is s (seconds).  


