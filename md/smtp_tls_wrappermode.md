# smtp_tls_wrappermode 

 Request that the Postfix SMTP client connects using the
SUBMISSIONS/SMTPS protocol instead of using the STARTTLS command. 

 This mode requires "smtp_tls_security_level = encrypt" or
stronger. 

 Example: deliver all remote mail via a provider's server
"mail.example.com".  


/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    # Client-side SMTPS requires "encrypt" or stronger.
    <a href="postconf.5.html#smtp_tls_security_level">smtp_tls_security_level</a> = encrypt
    <a href="postconf.5.html#smtp_tls_wrappermode">smtp_tls_wrappermode</a> = yes
    # The [] suppress MX lookups.
    <a href="postconf.5.html#relayhost">relayhost</a> = [mail.example.com]:465


 More examples are in TLS_README, including examples for older
Postfix versions. 

 This feature is available in Postfix 3.0 and later.  


