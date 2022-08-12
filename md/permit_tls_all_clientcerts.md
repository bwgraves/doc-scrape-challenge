# permit_tls_all_clientcerts  Permit the request when the remote SMTP client certificate is
verified successfully.  This option must be used only if a special
CA issues the certificates and only this CA is listed as a trusted
CA. Otherwise, clients with a third-party certificate would also
be allowed to relay.  Specify "tls_append_default_CA = no" when the
trusted CA is specified with smtpd_tls_CAfile or smtpd_tls_CApath,
to prevent Postfix from appending the system-supplied default CAs.
This feature requires "smtpd_tls_ask_ccert = yes" and is available
with Postfix version 2.2 and later.