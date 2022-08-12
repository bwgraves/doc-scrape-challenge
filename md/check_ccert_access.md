# check_ccert_access   By default use the remote SMTP client certificate fingerprint
or the public key
fingerprint (Postfix 2.9 and later) as the lookup key for the specified
access(5) database; with Postfix version 2.2, also require that the
remote SMTP client certificate is verified successfully.
The fingerprint digest algorithm is configurable via the
smtpd_tls_fingerprint_digest parameter (hard-coded as md5 prior to
Postfix version 2.5).  This feature requires "smtpd_tls_ask_ccert
= yes" and is available with Postfix version
2.2 and later. 