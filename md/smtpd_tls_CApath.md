# smtpd_tls_CApath (default:empty) 

 A directory containing (PEM format) CA certificates of root CAs
trusted to sign either remote SMTP client certificates or intermediate CA
certificates. Do not forget to create the necessary "hash" links with,
for example, "$OPENSSL_HOME/bin/c_rehash /etc/postfix/certs". To use
smtpd_tls_CApath in chroot mode, this directory (or a copy) must be
inside the chroot jail. 

 Specify "smtpd_tls_CApath = /path/to/system_CA_directory" to
use ONLY the system-supplied default Certification Authority certificates.


 Specify "tls_append_default_CA = no" to prevent Postfix from
appending the system-supplied default CAs and trusting third-party
certificates. 

 By default (see smtpd_tls_ask_ccert), client certificates are
not requested, and smtpd_tls_CApath should remain empty. In contrast
to smtpd_tls_CAfile, DNs of Certification Authorities installed
in $smtpd_tls_CApath are not included in the client certificate
request message. MUAs with multiple client certificates may use the
list of preferred Certification Authorities to select the correct
client certificate.  You may want to put your "preferred" CA or
CAs in $smtpd_tls_CAfile, and install the remaining trusted CAs in
$smtpd_tls_CApath. 

 Example: 


<a href="postconf.5.html#smtpd_tls_CApath">smtpd_tls_CApath</a> = /etc/postfix/certs


 This feature is available in Postfix 2.2 and later.  


