# smtp_tls_key_file 

 File with the Postfix SMTP client RSA private key in PEM format.
This file may be combined with the Postfix SMTP client RSA certificate
file specified with $smtp_tls_cert_file.  With Postfix &ge; 3.4 the
preferred way to configure client keys and certificates is via the
"smtp_tls_chain_files" parameter. 

 The private key must be accessible without a pass-phrase, i.e. it
must not be encrypted. File permissions should grant read-only
access to the system superuser account ("root"), and no access
to anyone else. 

 Example: 


<a href="postconf.5.html#smtp_tls_key_file">smtp_tls_key_file</a> = $<a href="postconf.5.html#smtp_tls_cert_file">smtp_tls_cert_file</a>


 This feature is available in Postfix 2.2 and later.  


