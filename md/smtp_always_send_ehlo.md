# smtp_always_send_ehlo 


Always send EHLO at the start of an SMTP session.



With "smtp_always_send_ehlo = no", the Postfix SMTP client sends
EHLO only when
the word "ESMTP" appears in the server greeting banner (example:
220 spike.porcupine.org ESMTP Postfix).



