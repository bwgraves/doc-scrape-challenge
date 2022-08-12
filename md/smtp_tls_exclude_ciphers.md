# smtp_tls_exclude_ciphers (default:empty) 

 List of ciphers or cipher types to exclude from the Postfix
SMTP client cipher
list at all TLS security levels. This is not an OpenSSL cipherlist, it is
a simple list separated by whitespace and/or commas. The elements are a
single cipher, or one or more "+" separated cipher properties, in which
case only ciphers matching all the properties are excluded. 

 Examples (some of these will cause problems): 



<a href="postconf.5.html#smtp_tls_exclude_ciphers">smtp_tls_exclude_ciphers</a> = aNULL
<a href="postconf.5.html#smtp_tls_exclude_ciphers">smtp_tls_exclude_ciphers</a> = MD5, DES
<a href="postconf.5.html#smtp_tls_exclude_ciphers">smtp_tls_exclude_ciphers</a> = DES+MD5
<a href="postconf.5.html#smtp_tls_exclude_ciphers">smtp_tls_exclude_ciphers</a> = AES256-SHA, DES-CBC3-MD5
<a href="postconf.5.html#smtp_tls_exclude_ciphers">smtp_tls_exclude_ciphers</a> = kEDH+aRSA



 The first setting disables anonymous ciphers. The next setting
disables ciphers that use the MD5 digest algorithm or the (single) DES
encryption algorithm. The next setting disables ciphers that use MD5 and
DES together.  The next setting disables the two ciphers "AES256-SHA"
and "DES-CBC3-MD5". The last setting disables ciphers that use "EDH"
key exchange with RSA authentication. 

 This feature is available in Postfix 2.3 and later. 


