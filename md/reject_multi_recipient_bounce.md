# reject_multi_recipient_bounce undefined Reject the request when the envelope sender is the null address,
and the message has multiple envelope recipients. This usage has
rare but legitimate applications: under certain conditions,
multi-recipient mail that was posted with the DSN option NOTIFY=NEVER
may be forwarded with the null sender address.
 Note: this restriction can only work reliably
when used in smtpd_data_restrictions or
smtpd_end_of_data_restrictions, because the total number of
recipients is not known at an earlier stage of the SMTP conversation.
Use at the RCPT stage will only reject the second etc.  recipient.

The multi_recipient_bounce_reject_code parameter specifies the
response code for rejected requests (default:  550).  This feature
is available in Postfix 2.1 and later. 