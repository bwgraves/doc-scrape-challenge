# postscreen_dnsbl_reply_map 

 A mapping from an actual DNSBL domain name which includes a secret
password, to the DNSBL domain name that postscreen will reply with
when it rejects mail.  When no mapping is found, the actual DNSBL
domain will be used. 

 For maximal stability it is best to use a file that is read
into memory such as pcre:, regexp: or texthash: (texthash: is similar
to hash:, except a) there is no need to run postmap(1) before the
file can be used, and b) texthash: does not detect changes after
the file is read). 

 Example: 


/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#postscreen_dnsbl_reply_map">postscreen_dnsbl_reply_map</a> = <a href="DATABASE_README.html#types">texthash</a>:/etc/postfix/dnsbl_reply



/etc/postfix/dnsbl_reply:
   secret.zen.spamhaus.org      zen.spamhaus.org


 This feature is available in Postfix 2.8.  


