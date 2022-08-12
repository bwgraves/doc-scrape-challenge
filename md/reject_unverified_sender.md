# reject_unverified_sender undefined Reject the request when mail to the MAIL FROM address is known to
bounce, or when the sender address destination is not reachable.
Address verification information is managed by the verify(8) server;
see the ADDRESS_VERIFICATION_README file for details.  The
unverified_sender_reject_code parameter specifies the numerical
response code when an address is known to bounce (default: 450,
change into 550 when you are confident that it is safe to do so).
The unverified_sender_defer_code specifies the numerical response
code when an address probe failed due to a temporary problem
(default: 450).   The unverified_sender_tempfail_action parameter
specifies the action after address probe failure due to a temporary
problem (default: defer_if_permit).   This feature breaks for
aliased addresses with "enable_original_recipient = no" (Postfix
&le; 3.2).   This feature is available in Postfix 2.1 and later.
