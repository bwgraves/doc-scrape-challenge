# smtp_send_dummy_mail_auth (default:no) 

 Whether or not to append the "AUTH=&lt;&gt;" option to the MAIL
FROM command in SASL-authenticated SMTP sessions. The default is
not to send this, to avoid problems with broken remote SMTP servers.
Before Postfix 2.9 the behavior is as if "smtp_send_dummy_mail_auth
= yes".

 This feature is available in Postfix 2.9 and later. 


