# smtpd_tls_dcert_file (default:empty); 

 File with the Postfix SMTP server DSA certificate in PEM format.
This file may also contain the Postfix SMTP server private DSA key.
The DSA algorithm is obsolete and should not be used. 

 See the discussion under smtpd_tls_cert_file for more details.


 Example: 


<a href="postconf.5.html#smtpd_tls_dcert_file">smtpd_tls_dcert_file</a> = /etc/postfix/server-dsa.pem


 This feature is available in Postfix 2.2 and later.  


