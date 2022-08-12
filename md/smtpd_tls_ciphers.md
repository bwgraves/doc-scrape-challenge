# smtpd_tls_ciphers 

 The minimum TLS cipher grade that the Postfix SMTP server
will use with opportunistic TLS encryption. Cipher types listed in
smtpd_tls_exclude_ciphers are excluded from the base definition of
the selected cipher grade.  The default value is "medium" for Postfix
releases after the middle of 2015, "export" for older releases.


 When TLS is mandatory the cipher grade is chosen via the
smtpd_tls_mandatory_ciphers configuration parameter, see there for syntax
details. 

 This feature is available in Postfix 2.6 and later. With earlier Postfix
releases only the smtpd_tls_mandatory_ciphers parameter is implemented,
and opportunistic TLS always uses "export" or better (i.e. all) ciphers. 


