# smtp_tls_eccert_file 

 File with the Postfix SMTP client ECDSA certificate in PEM format.
This file may also contain the Postfix SMTP client ECDSA private key.
With Postfix &ge; 3.4 the preferred way to configure client keys and
certificates is via the "smtp_tls_chain_files" parameter. 

 See the discussion under smtp_tls_cert_file for more details.


 Example: 


<a href="postconf.5.html#smtp_tls_eccert_file">smtp_tls_eccert_file</a> = /etc/postfix/ecdsa-ccert.pem


 This feature is available in Postfix 2.6 and later, when Postfix is
compiled and linked with OpenSSL 1.0.0 or later. 


