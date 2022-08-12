# smtp_skip_5xx_greeting 


Skip remote SMTP servers that greet with a 5XX status code.


 By default, the Postfix SMTP client moves on the next mail
exchanger. Specify "smtp_skip_5xx_greeting = no" if Postfix should
bounce the mail immediately. Caution: the latter behavior appears
to contradict RFC 2821. 


