# tls_medium_cipherlist 

 The OpenSSL cipherlist for "medium" or higher grade ciphers. This
defines the meaning of the "medium" setting in smtpd_tls_ciphers,
smtpd_tls_mandatory_ciphers, smtp_tls_ciphers, smtp_tls_mandatory_ciphers,
lmtp_tls_ciphers, and lmtp_tls_mandatory_ciphers.  This is the
default cipherlist for mandatory TLS encryption in the TLS client
(with anonymous ciphers disabled when verifying server certificates).
This is the default cipherlist for opportunistic TLS with Postfix
releases after the middle of 2015.  You are strongly encouraged not
to change this setting.  

 This feature is available in Postfix 2.3 and later. 


