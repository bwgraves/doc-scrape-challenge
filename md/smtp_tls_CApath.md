# smtp_tls_CApath 

 Directory with PEM format Certification Authority certificates
that the Postfix SMTP client uses to verify a remote SMTP server
certificate.  Don't forget to create the necessary "hash" links
with, for example, "$OPENSSL_HOME/bin/c_rehash /etc/postfix/certs".


 To use this option in chroot mode, this directory (or a copy)
must be inside the chroot jail. 

 Specify "smtp_tls_CApath = /path/to/system_CA_directory" to
use ONLY the system-supplied default Certification Authority certificates.


 Specify "tls_append_default_CA = no" to prevent Postfix from
appending the system-supplied default CAs and trusting third-party
certificates. 

 Example: 


<a href="postconf.5.html#smtp_tls_CApath">smtp_tls_CApath</a> = /etc/postfix/certs


 This feature is available in Postfix 2.2 and later.  


