# smtpd_per_request_deadline (default:normal:no,overload:yes); 

 Change the behavior of the smtpd_timeout and smtpd_starttls_timeout
time limits, from a time limit per plaintext or TLS read or write
call, to a combined time limit for receiving a complete SMTP request
and for sending a complete SMTP response. The deadline limits only
the time spent waiting for plaintext or TLS read or write calls,
not time spent elsewhere. The per-request deadline limits the impact
from hostile peers that trickle data one byte at a time. 

 See smtpd_min_data_rate for how the per-request deadline is
managed during the DATA and BDAT phase. 

 Note: when per-request deadlines are enabled, a short time limit
may cause problems with TLS over very slow network connections. The
reason is that a TLS protocol message can be up to 16 kbytes long
(with TLSv1), and that an entire TLS protocol message must be
transferred within the per-request deadline. 

 This feature is available in Postfix 3.7 and later. A weaker
feature, called smtpd_per_record_deadline, is available with Postfix
2.9-3.6. With older Postfix releases, the behavior is as if this
parameter is set to "no". 

 This feature is available in Postfix 3.7 and later. 


