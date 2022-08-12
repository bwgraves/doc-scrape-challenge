# smtpd_soft_error_limit 


The number of errors a remote SMTP client is allowed to make without
delivering mail before the Postfix SMTP server slows down all its
responses.




With Postfix version 2.1 and later, when the error count
is &gt; $smtpd_soft_error_limit, the Postfix SMTP server
delays all responses by $smtpd_error_sleep_time. 

With Postfix versions 2.0 and earlier, when the error count
is &gt; $smtpd_soft_error_limit, the Postfix SMTP server delays all
responses by the larger of (number of errors) seconds or
$smtpd_error_sleep_time. 

With Postfix versions 2.0 and earlier, when the error count
is &le; $smtpd_soft_error_limit, the Postfix SMTP server delays 4XX
and 5XX responses by $smtpd_error_sleep_time. 




