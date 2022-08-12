# smtpd_tls_dh512_param_file (default:empty); 

 File with DH parameters that the Postfix SMTP server should
use with export-grade EDH ciphers.  The default SMTP server cipher
grade is "medium" with Postfix releases after the middle of 2015,
and as a result export-grade cipher suites are by default not used.


 With Postfix &ge; 3.6 export-grade Diffie-Hellman key exchange
is no longer supported, and this parameter is silently ignored. 

 See also the discussion under the smtpd_tls_dh1024_param_file
configuration parameter.  

 Example: 


<a href="postconf.5.html#smtpd_tls_dh512_param_file">smtpd_tls_dh512_param_file</a> = /etc/postfix/dh_512.pem


This feature is available in Postfix 2.2 and later,
but is ignored in Postfix 3.6 and later.


