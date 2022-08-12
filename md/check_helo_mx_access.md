# check_helo_mx_access  Search the specified access(5) database for the MX hosts for
the HELO or EHLO hostname, and execute the corresponding action.
If no MX record is found, look up A or AAAA records, just like the
Postfix SMTP client would.
Note 1: a result of "OK" is not allowed for safety reasons. Instead,
use DUNNO in order to exclude specific hosts from denylists.  Note
2: specify "smtpd_helo_required = yes" to fully enforce this
restriction (without "smtpd_helo_required = yes", a client can
simply skip check_helo_mx_access by not sending HELO or EHLO).  This
feature is available in Postfix 2.1 and later.
