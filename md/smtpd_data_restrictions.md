# smtpd_data_restrictions (default:empty); 


Optional access restrictions that the Postfix SMTP server applies
in the context of the SMTP DATA command.
See SMTPD_ACCESS_README, section "Delayed evaluation of SMTP access
restriction lists" for a discussion of evaluation context and time.



This feature is available in Postfix 2.0 and later.



Specify a list of restrictions, separated by commas and/or whitespace.
Continue long lines by starting the next line with whitespace.
Restrictions are applied in the order as specified; the first
restriction that matches wins.



The following restrictions are valid in this context:




Generic restrictions that can be used
in any SMTP command context, described under smtpd_client_restrictions.

SMTP command specific restrictions described under
smtpd_client_restrictions, smtpd_helo_restrictions,
smtpd_sender_restrictions or smtpd_recipient_restrictions.

However, no recipient information is available in the case of
multi-recipient mail. Acting on only one recipient would be misleading,
because any decision will affect all recipients equally. Acting on
all recipients would require a possibly very large amount of memory,
and would also be misleading for the reasons mentioned before.




Examples:



<a href="postconf.5.html#smtpd_data_restrictions">smtpd_data_restrictions</a> = <a href="postconf.5.html#reject_unauth_pipelining">reject_unauth_pipelining</a>
<a href="postconf.5.html#smtpd_data_restrictions">smtpd_data_restrictions</a> = <a href="postconf.5.html#reject_multi_recipient_bounce">reject_multi_recipient_bounce</a>



