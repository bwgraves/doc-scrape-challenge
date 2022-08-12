# smtpd_sasl_mechanism_filter 

 If non-empty, a filter for the SASL mechanism names that the
Postfix SMTP server will announce in the EHLO response. By default,
the Postfix SMTP server will not announce the EXTERNAL mechanism,
because Postfix support for that is not implemented. 

 Specify mechanism names, "/file/name" patterns, or "type:table"
lookup tables, separated by comma or whitespace. The right-hand
side result from "type:table" lookups is ignored. Specify "!pattern"
to exclude a mechanism name from the list. 


Examples:



<a href="postconf.5.html#smtpd_sasl_mechanism_filter">smtpd_sasl_mechanism_filter</a> = !external, !gssapi, <a href="DATABASE_README.html#types">static</a>:rest
<a href="postconf.5.html#smtpd_sasl_mechanism_filter">smtpd_sasl_mechanism_filter</a> = login, plain
<a href="postconf.5.html#smtpd_sasl_mechanism_filter">smtpd_sasl_mechanism_filter</a> = /etc/postfix/smtpd_mechs


 This feature is available in Postfix 3.6 and later. 


