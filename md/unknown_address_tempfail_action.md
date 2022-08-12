# unknown_address_tempfail_action (default:$; 

 The Postfix SMTP server's action when reject_unknown_sender_domain
or reject_unknown_recipient_domain fail due to a temporary error
condition. Specify "defer" to defer the remote SMTP client request
immediately. With the default "defer_if_permit" action, the Postfix
SMTP server continues to look for opportunities to reject mail, and
defers the client request only if it would otherwise be accepted.


 This feature is available in Postfix 2.6 and later. 


