# ignore_mx_lookup_error 

 Ignore DNS MX lookups that produce no response.  By default,
the Postfix SMTP client defers delivery and tries again after some
delay.  This behavior is required by the SMTP standard.  


Specify "ignore_mx_lookup_error = yes" to force a DNS A record
lookup instead. This violates the SMTP standard and can result in
mis-delivery of mail.



