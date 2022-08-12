# reject_unauthenticated_sender_login_mismatch  Reject the request when SASL is enabled, the MAIL FROM address
is listed in $smtpd_sender_login_maps, but the client is not
authenticated with SASL.

With SASL enabled, this prevents an unauthenticated client from
using any MAIL FROM address that is listed in $smtpd_sender_login_maps.

This feature is available in Postfix version 2.1 and later.