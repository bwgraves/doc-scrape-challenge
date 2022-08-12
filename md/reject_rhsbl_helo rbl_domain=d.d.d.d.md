# reject_rhsbl_helo rbl_domain=d.d.d.d undefined Reject the request when the HELO or EHLO hostname is
listed with the A record "d.d.d.d" under rbl_domain
(Postfix version 2.1 and later only).  Each "d" is a number,
or a pattern inside "[]" that contains one or more ";"-separated
numbers or number..number ranges (Postfix version 2.8 and later).
If no "=d.d.d.d" is
specified, reject the request when the HELO or EHLO hostname is
listed with any A record under rbl_domain. See the
reject_rbl_client description for additional RBL related configuration
parameters.  Note: specify "smtpd_helo_required = yes" to fully
enforce this restriction (without "smtpd_helo_required = yes", a
client can simply skip reject_rhsbl_helo by not sending HELO or
EHLO). This feature is available in Postfix 2.0
and later.  