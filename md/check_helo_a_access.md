# check_helo_a_access Search the specified access(5) database for the IP addresses for
the HELO or EHLO hostname, and execute the corresponding action.
Note 1: a result of "OK" is not allowed for safety reasons. Instead,
use DUNNO in order to exclude specific hosts from denylists.  Note
2: specify "smtpd_helo_required = yes" to fully enforce this
restriction (without "smtpd_helo_required = yes", a client can
simply skip check_helo_a_access by not sending HELO or EHLO).  This
feature is available in Postfix 3.0 and later.
