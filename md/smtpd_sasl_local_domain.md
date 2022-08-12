# smtpd_sasl_local_domain (default:empty) 


The name of the Postfix SMTP server's local SASL authentication
realm.



By default, the local authentication realm name is the null string.



Examples:



<a href="postconf.5.html#smtpd_sasl_local_domain">smtpd_sasl_local_domain</a> = $<a href="postconf.5.html#mydomain">mydomain</a>
<a href="postconf.5.html#smtpd_sasl_local_domain">smtpd_sasl_local_domain</a> = $<a href="postconf.5.html#myhostname">myhostname</a>



