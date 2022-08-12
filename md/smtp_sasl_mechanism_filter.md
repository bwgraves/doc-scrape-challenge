# smtp_sasl_mechanism_filter 


If non-empty, a Postfix SMTP client filter for the remote SMTP
server's list of offered SASL mechanisms.  Different client and
server implementations may support different mechanism lists; by
default, the Postfix SMTP client will use the intersection of the
two. smtp_sasl_mechanism_filter specifies an optional third mechanism
list to intersect with. 

 Specify mechanism names, "/file/name" patterns or "type:table"
lookup tables. The right-hand side result from "type:table" lookups
is ignored. Specify "!pattern" to exclude a mechanism name from the
list. The form "!/file/name" is supported only in Postfix version
2.4 and later. 

 This feature is available in Postfix 2.2 and later. 


Examples:



<a href="postconf.5.html#smtp_sasl_mechanism_filter">smtp_sasl_mechanism_filter</a> = plain, login
<a href="postconf.5.html#smtp_sasl_mechanism_filter">smtp_sasl_mechanism_filter</a> = /etc/postfix/smtp_mechs
<a href="postconf.5.html#smtp_sasl_mechanism_filter">smtp_sasl_mechanism_filter</a> = !gssapi, !login, <a href="DATABASE_README.html#types">static</a>:rest



