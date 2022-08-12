# reject_unknown_helo_hostname undefined; Reject the request when the HELO or EHLO hostname has no DNS A
or MX record.  The reply is specified with the
unknown_hostname_reject_code parameter (default: 450) or
unknown_helo_hostname_tempfail_action (default: defer_if_permit).
See the respective parameter descriptions for details. 
Note: specify "smtpd_helo_required = yes" to fully
enforce this restriction (without "smtpd_helo_required = yes", a
client can simply skip reject_unknown_helo_hostname by not sending
HELO or EHLO). 