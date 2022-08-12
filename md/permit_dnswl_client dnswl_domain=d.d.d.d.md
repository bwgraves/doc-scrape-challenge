# permit_dnswl_client dnswl_domain=d.d.d.d undefined Accept the request when the reversed client network address is
listed with the A record "d.d.d.d" under dnswl_domain.
Each "d" is a number, or a pattern inside "[]" that contains
one or more ";"-separated numbers or number..number ranges.
If no "=d.d.d.d" is specified, accept the request when the
reversed client network address is listed with any A record under
dnswl_domain.  For safety, permit_dnswl_client is silently
ignored when it would override reject_unauth_destination.  The
result is DEFER_IF_REJECT when allowlist lookup fails.  This feature
is available in Postfix 2.8 and later.  