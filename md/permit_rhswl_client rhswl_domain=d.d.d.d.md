# permit_rhswl_client rhswl_domain=d.d.d.d undefined; Accept the request when the client hostname is listed with the
A record "d.d.d.d" under rhswl_domain.  Each "d"
is a number, or a pattern inside "[]" that contains one or more
";"-separated numbers or number..number ranges. If no
"=d.d.d.d" is specified, accept the request when the client
hostname is listed with any A record under rhswl_domain.
 Caution: client name allowlisting is fragile, since the client
name lookup can fail due to temporary outages.  Client name
allowlisting should be used only to reduce false positives in e.g.
DNS-based blocklists, and not for making access rule exceptions.
 For safety, permit_rhswl_client is silently ignored when it
would override reject_unauth_destination.  The result is DEFER_IF_REJECT
when allowlist lookup fails.  This feature is available in Postfix
2.8 and later.  