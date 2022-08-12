# smtp_address_verify_target (default:rcpt); 

 In the context of email address verification, the SMTP protocol
stage that determines whether an email address is deliverable.
Specify one of "rcpt" or "data".  The latter is needed with remote
SMTP servers that reject recipients after the DATA command. Use
transport_maps to apply this feature selectively:  



/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#transport_maps">transport_maps</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/transport





/etc/postfix/transport:
    smtp-domain-that-verifies-after-data    smtp-data-target:
    lmtp-domain-that-verifies-after-data    lmtp-data-target:





/etc/postfix/<a href="master.5.html">master.cf</a>:
    smtp-data-target    unix    -    -    n    -    -    smtp
        -o <a href="postconf.5.html#smtp_address_verify_target">smtp_address_verify_target</a>=data
    lmtp-data-target    unix    -    -    n    -    -    lmtp
        -o <a href="postconf.5.html#lmtp_address_verify_target">lmtp_address_verify_target</a>=data



 Unselective use of the "data" target does no harm, but will
result in unnecessary "lost connection after DATA" events at remote
SMTP/LMTP servers. 

 This feature is available in Postfix 3.0 and later.  


