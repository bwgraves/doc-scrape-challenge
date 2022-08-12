# smtpd_relay_before_recipient_restrictions 

 Evaluate smtpd_relay_restrictions before smtpd_recipient_restrictions.
Historically, smtpd_relay_restrictions was evaluated after
smtpd_recipient_restrictions, contradicting documented behavior. 

 Background: the smtpd_relay_restrictions feature is primarily
designed to enforce a mail relaying policy, while
smtpd_recipient_restrictions is primarily designed to enforce spam
blocking policy. Both are evaluated while replying to the RCPT TO
command, and both support the same features. 

 This feature is available in Postfix 3.6 and later. 


