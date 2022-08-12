# smtp_tls_loglevel 

 Enable additional Postfix SMTP client logging of TLS activity.
Each logging level also includes the information that is logged at
a lower logging level.  



   0 Disable logging of TLS activity. 

   1 Log only a summary message on TLS handshake completion
&mdash; no logging of remote SMTP server certificate trust-chain
verification errors if server certificate verification is not required.
With Postfix 2.8 and earlier, log the summary message and unconditionally
log trust-chain verification errors.  

   2 Also log levels during TLS negotiation.  

   3 Also log the hexadecimal and ASCII dump of the
TLS negotiation process.  

   4 Also log the hexadecimal and ASCII dump of complete
transmission after STARTTLS. 



 Do not use "smtp_tls_loglevel = 2" or higher except in case of
problems. Use of loglevel 4 is strongly discouraged. 

 This feature is available in Postfix 2.2 and later.  


