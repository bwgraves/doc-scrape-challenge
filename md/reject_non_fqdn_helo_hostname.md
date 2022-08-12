# reject_non_fqdn_helo_hostname undefined Reject the request when the HELO or EHLO hostname is not in
fully-qualified domain or address literal form, as required by the
RFC. Note: specify
"smtpd_helo_required = yes" to fully enforce this restriction
(without "smtpd_helo_required = yes", a client can simply skip
reject_non_fqdn_helo_hostname by not sending HELO or EHLO).  
The non_fqdn_reject_code parameter specifies the response code for
rejected requests (default: 504).