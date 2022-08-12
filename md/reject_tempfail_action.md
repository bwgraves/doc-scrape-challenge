# reject_tempfail_action 

 The Postfix SMTP server's action when a reject-type restriction
fails due to a temporary error condition. Specify "defer" to defer
the remote SMTP client request immediately. With the default
"defer_if_permit" action, the Postfix SMTP server continues to look
for opportunities to reject mail, and defers the client request
only if it would otherwise be accepted. 

 For finer control, see: unverified_recipient_tempfail_action,
unverified_sender_tempfail_action, unknown_address_tempfail_action,
and unknown_helo_hostname_tempfail_action.  

 This feature is available in Postfix 2.6 and later. 


