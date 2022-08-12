# reject_rhsbl_reverse_client rbl_domain=d.d.d.d undefined Reject the request when the unverified reverse client hostname
is listed with the A record "d.d.d.d" under rbl_domain.
Each "d" is a number, or a pattern inside "[]" that contains
one or more ";"-separated numbers or number..number ranges.
If no "=d.d.d.d" is specified, reject the request when the
unverified reverse client hostname is listed with any A record under
rbl_domain. See the reject_rbl_client description above for
additional RBL related configuration parameters.  This feature is
available in Postfix 2.8 and later.  