# smtpd_sender_restrictions (default:empty) 


Optional restrictions that the Postfix SMTP server applies in the
context of a client MAIL FROM command.
See SMTPD_ACCESS_README, section "Delayed evaluation of SMTP access
restriction lists" for a discussion of evaluation context and time.



The default is to permit everything.



Specify a list of restrictions, separated by commas and/or whitespace.
Continue long lines by starting the next line with whitespace.
Restrictions are applied in the order as specified; the first
restriction that matches wins.



The following restrictions are specific to the sender address
received with the MAIL FROM command.




check_sender_access type:table

Search the specified access(5) database for the MAIL FROM
address, domain, parent domains, or localpart@, and execute the
corresponding action. 

check_sender_a_access type:table

Search the specified access(5) database for the IP addresses for
the MAIL FROM domain, and execute the corresponding action.  Note:
a result of "OK" is not allowed for safety reasons. Instead, use
DUNNO in order to exclude specific hosts from denylists.  This
feature is available in Postfix 3.0 and later. 

check_sender_mx_access type:table

Search the specified access(5) database for the MX hosts for
the MAIL FROM domain, and execute the corresponding action.  If no
MX record is found, look up A or AAAA records, just like the Postfix
SMTP client would. Note:
a result of "OK" is not allowed for safety reasons. Instead, use
DUNNO in order to exclude specific hosts from denylists.  This
feature is available in Postfix 2.1 and later. 

check_sender_ns_access type:table

Search the specified access(5) database for the DNS servers
for the MAIL FROM domain, and execute the corresponding action.
Note: a result of "OK" is not allowed for safety reasons. Instead,
use DUNNO in order to exclude specific hosts from denylists.  This
feature is available in Postfix 2.1 and later.  

reject_authenticated_sender_login_mismatch

 Reject the request when the client is authenticated with SASL,
but either the MAIL FROM address is not listed in $smtpd_sender_login_maps,
or the SASL login name is not an owner for that address.

This prevents an authenticated client from using a MAIL FROM address
that they do not explicitly own.

This feature is available in Postfix version 2.1 and later. 

reject_known_sender_login_mismatch

 When the client is authenticated with SASL, reject the request
when the MAIL FROM address is listed in $smtpd_sender_login_maps,
but the SASL login name is not an owner for that address.

When the client is not authenticated with SASL, reject the request
when SASL is enabled, and the MAIL FROM address is listed in
$smtpd_sender_login_maps.

This protects any MAIL FROM address that is listed in
$smtpd_sender_login_maps, while still allowing a client to use any
unlisted MAIL FROM address.

This feature is available in Postfix version 2.11 and later.

reject_non_fqdn_sender

Reject the request when the MAIL FROM address specifies a
domain that is not in
fully-qualified domain form as required by the RFC.  The
non_fqdn_reject_code parameter specifies the response code for
rejected requests (default: 504). 

reject_rhsbl_sender rbl_domain=d.d.d.d

Reject the request when the MAIL FROM domain is listed with
the A record "d.d.d.d" under rbl_domain (Postfix
version 2.1 and later only).  Each "d" is a number, or a
pattern inside "[]" that contains one or more ";"-separated numbers
or number..number ranges (Postfix version 2.8 and later). If no
"=d.d.d.d" is specified,
reject the request when the MAIL FROM domain is
listed with any A record under rbl_domain.  The
maps_rbl_reject_code parameter specifies the response code for
rejected requests (default:  554); the default_rbl_reply parameter
specifies the default server reply; and the rbl_reply_maps parameter
specifies tables with server replies indexed by rbl_domain.
This feature is available in Postfix 2.0 and later.

reject_sender_login_mismatch

 As of Postfix 2.1, this is an alias for
"reject_authenticated_sender_login_mismatch,
reject_unauthenticated_sender_login_mismatch".

reject_unauthenticated_sender_login_mismatch

 Reject the request when SASL is enabled, the MAIL FROM address
is listed in $smtpd_sender_login_maps, but the client is not
authenticated with SASL.

With SASL enabled, this prevents an unauthenticated client from
using any MAIL FROM address that is listed in $smtpd_sender_login_maps.

This feature is available in Postfix version 2.1 and later.

reject_unknown_sender_domain

Reject the request when Postfix is not the final destination for
the sender address, and the MAIL FROM domain has 1) no DNS MX and
no DNS A
record, or 2) a malformed MX record such as a record with
a zero-length MX hostname (Postfix version 2.3 and later).  The
reply is specified with the unknown_address_reject_code parameter
(default: 450), unknown_address_tempfail_action (default:
defer_if_permit), or 550 (nullmx, Postfix 3.0 and
later). See the respective parameter descriptions for details.


reject_unlisted_sender

Reject the request when the MAIL FROM address is not listed in
the list of valid recipients for its domain class. See the
smtpd_reject_unlisted_sender parameter description for details.
This feature is available in Postfix 2.1 and later.

reject_unverified_sender

Reject the request when mail to the MAIL FROM address is known to
bounce, or when the sender address destination is not reachable.
Address verification information is managed by the verify(8) server;
see the ADDRESS_VERIFICATION_README file for details.  The
unverified_sender_reject_code parameter specifies the numerical
response code when an address is known to bounce (default: 450,
change into 550 when you are confident that it is safe to do so).
The unverified_sender_defer_code specifies the numerical response
code when an address probe failed due to a temporary problem
(default: 450).   The unverified_sender_tempfail_action parameter
specifies the action after address probe failure due to a temporary
problem (default: defer_if_permit).   This feature breaks for
aliased addresses with "enable_original_recipient = no" (Postfix
&le; 3.2).   This feature is available in Postfix 2.1 and later.





Other restrictions that are valid in this context:




 Generic restrictions that can be used
in any SMTP command context, described under smtpd_client_restrictions.

 SMTP command specific restrictions described under
smtpd_client_restrictions and smtpd_helo_restrictions.

 SMTP command specific restrictions described under
smtpd_recipient_restrictions. When recipient restrictions are listed
under smtpd_sender_restrictions, they have effect only with
"smtpd_delay_reject = yes", so that $smtpd_sender_restrictions is
evaluated at the time of the RCPT TO command.




Examples:



<a href="postconf.5.html#smtpd_sender_restrictions">smtpd_sender_restrictions</a> = <a href="postconf.5.html#reject_unknown_sender_domain">reject_unknown_sender_domain</a>
<a href="postconf.5.html#smtpd_sender_restrictions">smtpd_sender_restrictions</a> = <a href="postconf.5.html#reject_unknown_sender_domain">reject_unknown_sender_domain</a>,
    <a href="postconf.5.html#check_sender_access">check_sender_access</a> <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/access



