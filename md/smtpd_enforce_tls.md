# smtpd_enforce_tls (default:no); 

 Mandatory TLS: announce STARTTLS support to remote SMTP clients,
and require that clients use TLS encryption.  According to RFC 2487
this MUST NOT be applied in case of a publicly-referenced SMTP
server.  This option is therefore off by default. 

 Note 1: "smtpd_enforce_tls = yes" implies "smtpd_tls_auth_only = yes". 

 Note 2: when invoked via "sendmail -bs", Postfix will never offer
STARTTLS due to insufficient privileges to access the server private
key. This is intended behavior. 

 This feature is available in Postfix 2.2 and later. With
Postfix 2.3 and later use smtpd_tls_security_level instead. 


