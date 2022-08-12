# smtpd_banner 


The text that follows the 220 status code in the SMTP greeting
banner. Some people like to see the mail version advertised. By
default, Postfix shows no version.



You MUST specify $myhostname at the start of the text. This is
required by the SMTP protocol.



Example:



<a href="postconf.5.html#smtpd_banner">smtpd_banner</a> = $<a href="postconf.5.html#myhostname">myhostname</a> ESMTP $<a href="postconf.5.html#mail_name">mail_name</a> ($<a href="postconf.5.html#mail_version">mail_version</a>)



