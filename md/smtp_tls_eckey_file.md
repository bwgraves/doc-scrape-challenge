# smtp_tls_eckey_file (default:$ 

 File with the Postfix SMTP client ECDSA private key in PEM format.
This file may be combined with the Postfix SMTP client ECDSA certificate
file specified with $smtp_tls_eccert_file.  With Postfix &ge; 3.4 the
preferred way to configure client keys and certificates is via the
"smtp_tls_chain_files" parameter. 

 The private key must be accessible without a pass-phrase, i.e. it
must not be encrypted. File permissions should grant read-only
access to the system superuser account ("root"), and no access
to anyone else. 

 This feature is available in Postfix 2.6 and later, when Postfix is
compiled and linked with OpenSSL 1.0.0 or later. 


