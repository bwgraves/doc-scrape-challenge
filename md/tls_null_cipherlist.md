# tls_null_cipherlist (default:eNULL:!aNULL) 

 The OpenSSL cipherlist for "NULL" grade ciphers that provide
authentication without encryption. This defines the meaning of the "null"
setting in smtpd_tls_mandatory_ciphers, smtp_tls_mandatory_ciphers and
lmtp_tls_mandatory_ciphers.  You are strongly encouraged not to
change this setting. 

 This feature is available in Postfix 2.3 and later. 


