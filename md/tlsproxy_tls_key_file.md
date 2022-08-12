# tlsproxy_tls_key_file 

 File with the Postfix tlsproxy(8) server RSA private key in PEM
format.  This file may be combined with the Postfix tlsproxy(8) server
RSA certificate file specified with $smtpd_tls_cert_file.  See
smtpd_tls_key_file for further details.  With Postfix &ge; 3.4 the
preferred way to configure tlsproxy server keys and certificates is via
the "tlsproxy_tls_chain_files" parameter. 

 This feature is available in Postfix 2.8 and later. 


