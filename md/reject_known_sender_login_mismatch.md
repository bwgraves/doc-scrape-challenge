# reject_known_sender_login_mismatch  When the client is authenticated with SASL, reject the request
when the MAIL FROM address is listed in $smtpd_sender_login_maps,
but the SASL login name is not an owner for that address.

When the client is not authenticated with SASL, reject the request
when SASL is enabled, and the MAIL FROM address is listed in
$smtpd_sender_login_maps.

This protects any MAIL FROM address that is listed in
$smtpd_sender_login_maps, while still allowing a client to use any
unlisted MAIL FROM address.

This feature is available in Postfix version 2.11 and later.