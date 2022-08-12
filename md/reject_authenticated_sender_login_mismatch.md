# reject_authenticated_sender_login_mismatch  Reject the request when the client is authenticated with SASL,
but either the MAIL FROM address is not listed in $smtpd_sender_login_maps,
or the SASL login name is not an owner for that address.

This prevents an authenticated client from using a MAIL FROM address
that they do not explicitly own.

This feature is available in Postfix version 2.1 and later. 