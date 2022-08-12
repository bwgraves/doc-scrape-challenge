# permit_tls_clientcerts Permit the request when the remote SMTP client certificate
fingerprint or public key fingerprint (Postfix 2.9 and later) is
listed in $relay_clientcerts.
The fingerprint digest algorithm is configurable via the
smtpd_tls_fingerprint_digest parameter (hard-coded as md5 prior to
Postfix version 2.5).  This feature requires "smtpd_tls_ask_ccert
= yes" and is available with Postfix version 2.2 and later.