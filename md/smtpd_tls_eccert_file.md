# smtpd_tls_eccert_file (default:empty) 

 File with the Postfix SMTP server ECDSA certificate in PEM format.
This file may also contain the Postfix SMTP server private ECDSA key.
With Postfix &ge; 3.4 the preferred way to configure server keys and
certificates is via the "smtpd_tls_chain_files" parameter. 

 See the discussion under smtpd_tls_cert_file for more details. 

 Example: 


<a href="postconf.5.html#smtpd_tls_eccert_file">smtpd_tls_eccert_file</a> = /etc/postfix/ecdsa-scert.pem


 This feature is available in Postfix 2.6 and later, when Postfix is
compiled and linked with OpenSSL 1.0.0 or later. 


