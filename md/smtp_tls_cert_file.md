# smtp_tls_cert_file (default:empty) 

 File with the Postfix SMTP client RSA certificate in PEM format.
This file may also contain the Postfix SMTP client private RSA key, and
these may be the same as the Postfix SMTP server RSA certificate and key
file.  With Postfix &ge; 3.4 the preferred way to configure client keys
and certificates is via the "smtp_tls_chain_files" parameter. 

 Do not configure client certificates unless you must present
client TLS certificates to one or more servers. Client certificates are
not usually needed, and can cause problems in configurations that work
well without them. The recommended setting is to let the defaults stand: 



<a href="postconf.5.html#smtp_tls_cert_file">smtp_tls_cert_file</a> =
<a href="postconf.5.html#smtp_tls_key_file">smtp_tls_key_file</a> =
<a href="postconf.5.html#smtp_tls_eccert_file">smtp_tls_eccert_file</a> =
<a href="postconf.5.html#smtp_tls_eckey_file">smtp_tls_eckey_file</a> =
# Obsolete DSA parameters
<a href="postconf.5.html#smtp_tls_dcert_file">smtp_tls_dcert_file</a> =
<a href="postconf.5.html#smtp_tls_dkey_file">smtp_tls_dkey_file</a> =
# Postfix &ge; 3.4 interface
<a href="postconf.5.html#smtp_tls_chain_files">smtp_tls_chain_files</a> =



 The best way to use the default settings is to comment out the above
parameters in main.cf if present. 

 To enable remote SMTP servers to verify the Postfix SMTP client
certificate, the issuing CA certificates must be made available to the
server. You should include the required certificates in the client
certificate file, the client certificate first, then the issuing
CA(s) (bottom-up order). 

 Example: the certificate for "client.example.com" was issued by
"intermediate CA" which itself has a certificate issued by "root CA".
As the "root" super-user create the client.pem file with: 



# <b>umask 077</b>
# <b>cat client_key.pem client_cert.pem intermediate_CA.pem &gt; chain.pem </b>



 If you also want to verify remote SMTP server certificates issued by
these CAs, you can add the CA certificates to the smtp_tls_CAfile, in
which case it is not necessary to have them in the smtp_tls_cert_file,
smtp_tls_dcert_file (obsolete) or smtp_tls_eccert_file. 

 A certificate supplied here must be usable as an SSL client certificate
and hence pass the "openssl verify -purpose sslclient ..." test. 

 Example: 


<a href="postconf.5.html#smtp_tls_cert_file">smtp_tls_cert_file</a> = /etc/postfix/chain.pem


 This feature is available in Postfix 2.2 and later.  


