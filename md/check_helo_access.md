# check_helo_access  Search the specified access(5) database for the HELO or EHLO
hostname or parent domains, and execute the corresponding action.
Note: specify "smtpd_helo_required = yes" to fully enforce this
restriction (without "smtpd_helo_required = yes", a client can
simply skip check_helo_access by not sending HELO or EHLO).  