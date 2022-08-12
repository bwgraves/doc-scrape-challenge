# tls_export_cipherlist (default:see"postconf-d"output) 

 The OpenSSL cipherlist for "export" or higher grade ciphers. This
defines the meaning of the "export" setting in smtpd_tls_ciphers,
smtpd_tls_mandatory_ciphers, smtp_tls_ciphers, smtp_tls_mandatory_ciphers,
lmtp_tls_ciphers, and lmtp_tls_mandatory_ciphers.  With Postfix
releases before the middle of 2015 this is the default cipherlist
for the opportunistic ("may") TLS client security level and also
the default cipherlist for the SMTP server. You are strongly
encouraged not to change this setting.  

 This feature is available in Postfix 2.3 and later. 


