# reject_invalid_helo_hostname undefined; Reject the request when the HELO or EHLO hostname is malformed.
Note: specify "smtpd_helo_required = yes" to fully enforce
this restriction (without "smtpd_helo_required = yes", a client can simply
skip reject_invalid_helo_hostname by not sending HELO or EHLO).
 The invalid_hostname_reject_code specifies the response code
for rejected requests (default: 501).