# smtp_tls_dcert_file (default:empty); 

 File with the Postfix SMTP client DSA certificate in PEM format.
This file may also contain the Postfix SMTP client private DSA key.
The DSA algorithm is obsolete and should not be used. 

 See the discussion under smtp_tls_cert_file for more details.


 Example: 


<a href="postconf.5.html#smtp_tls_dcert_file">smtp_tls_dcert_file</a> = /etc/postfix/client-dsa.pem


 This feature is available in Postfix 2.2 and later.  


