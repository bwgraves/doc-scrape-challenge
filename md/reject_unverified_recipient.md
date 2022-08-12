# reject_unverified_recipient undefined; Reject the request when mail to the RCPT TO address is known
to bounce, or when the recipient address destination is not reachable.
Address verification information is managed by the verify(8) server;
see the ADDRESS_VERIFICATION_README file for details.   The
unverified_recipient_reject_code parameter specifies the numerical
response code when an address is known to bounce (default: 450,
change it to 550 when you are confident that it is safe to do so).
The unverified_recipient_defer_code parameter specifies the
numerical response code when an address probe failed due to a
temporary problem (default: 450).  The
unverified_recipient_tempfail_action parameter specifies the action
after address probe failure due to a temporary problem (default:
defer_if_permit).  This feature breaks for aliased addresses
with "enable_original_recipient = no" (Postfix &le; 3.2). 
This feature is available in Postfix 2.1 and later. 