# smtpd_recipient_restrictions (default:see"postconf-d"output); 


Optional restrictions that the Postfix SMTP server applies in the
context of a client RCPT TO command, after smtpd_relay_restrictions.
See SMTPD_ACCESS_README, section "Delayed evaluation of SMTP access
restriction lists" for a discussion of evaluation context and time.


 With Postfix versions before 2.10, the rules for relay permission
and spam blocking were combined under smtpd_recipient_restrictions,
resulting in error-prone configuration.  As of Postfix 2.10, relay
permission rules are preferably implemented with smtpd_relay_restrictions,
so that a permissive spam blocking policy under
smtpd_recipient_restrictions will no longer result in a permissive
mail relay policy.  

 For backwards compatibility, sites that migrate from Postfix
versions before 2.10 can set smtpd_relay_restrictions to the empty
value, and use smtpd_recipient_restrictions exactly as before. 


IMPORTANT: Either the smtpd_relay_restrictions or the
smtpd_recipient_restrictions parameter must specify
at least one of the following restrictions. Otherwise Postfix will
refuse to receive mail:




reject, <a href="postconf.5.html#reject_unauth_destination">reject_unauth_destination</a>





defer, <a href="postconf.5.html#defer_if_permit">defer_if_permit</a>, <a href="postconf.5.html#defer_unauth_destination">defer_unauth_destination</a>




Specify a list of restrictions, separated by commas and/or whitespace.
Continue long lines by starting the next line with whitespace.
Restrictions are applied in the order as specified; the first
restriction that matches wins.



The following restrictions are specific to the recipient address
that is received with the RCPT TO command.




check_recipient_access type:table

Search the specified access(5) database for the resolved RCPT
TO address, domain, parent domains, or localpart@, and execute the
corresponding action.  

check_recipient_a_access type:table

Search the specified access(5) database for the IP addresses for
the RCPT TO domain, and execute the corresponding action.  Note:
a result of "OK" is not allowed for safety reasons. Instead, use
DUNNO in order to exclude specific hosts from denylists.  This
feature is available in Postfix 3.0 and later. 

check_recipient_mx_access type:table

Search the specified access(5) database for the MX hosts for
the RCPT TO domain, and execute the corresponding action.  If no
MX record is found, look up A or AAAA records, just like the Postfix
SMTP client would. Note:
a result of "OK" is not allowed for safety reasons. Instead, use
DUNNO in order to exclude specific hosts from denylists.  This
feature is available in Postfix 2.1 and later. 

check_recipient_ns_access type:table

Search the specified access(5) database for the DNS servers
for the RCPT TO domain, and execute the corresponding action.
Note: a result of "OK" is not allowed for safety reasons. Instead,
use DUNNO in order to exclude specific hosts from denylists.  This
feature is available in Postfix 2.1 and later.  

permit_auth_destination

Permit the request when one of the following is true:



 Postfix is a mail forwarder: the resolved RCPT TO domain matches
$relay_domains or a subdomain thereof, and the address contains no
sender-specified routing (user@elsewhere@domain),

 Postfix is the final destination: the resolved RCPT TO domain
matches $mydestination, $inet_interfaces, $proxy_interfaces,
$virtual_alias_domains, or $virtual_mailbox_domains, and the address
contains no sender-specified routing (user@elsewhere@domain).



permit_mx_backup

Permit the request when the local mail system is a backup MX for
the RCPT TO domain, or when the domain is an authorized destination
(see permit_auth_destination for definition).



 Safety: permit_mx_backup does not accept addresses that have
sender-specified routing information (example: user@elsewhere@domain).

 Safety: permit_mx_backup can be vulnerable to mis-use when
access is not restricted with permit_mx_backup_networks.

 Safety: as of Postfix version 2.3, permit_mx_backup no longer
accepts the address when the local mail system is a primary MX for
the recipient domain.  Exception: permit_mx_backup accepts the address
when it specifies an authorized destination (see permit_auth_destination
for definition).

 Limitation: mail may be rejected in case of a temporary DNS
lookup problem with Postfix prior to version 2.0.



reject_non_fqdn_recipient

Reject the request when the RCPT TO address specifies a
domain that is not in
fully-qualified domain form, as required by the RFC.  The
non_fqdn_reject_code parameter specifies the response code for
rejected requests (default: 504). 

reject_rhsbl_recipient rbl_domain=d.d.d.d

Reject the request when the RCPT TO domain is listed with the
A record "d.d.d.d" under rbl_domain (Postfix version
2.1 and later only).  Each "d" is a number, or a pattern
inside "[]" that contains one or more ";"-separated numbers or
number..number ranges (Postfix version 2.8 and later). If no
"=d.d.d.d" is specified, reject
the request when the RCPT TO domain is listed with
any A record under rbl_domain.  The maps_rbl_reject_code
parameter specifies the response code for rejected requests (default:
554); the default_rbl_reply parameter specifies the default server
reply; and the rbl_reply_maps parameter specifies tables with server
replies indexed by rbl_domain.  This feature is available
in Postfix version 2.0 and later.

reject_unauth_destination

Reject the request unless one of the following is true:



 Postfix is a mail forwarder: the resolved RCPT TO domain matches
$relay_domains or a subdomain thereof, and contains no sender-specified
routing (user@elsewhere@domain),

 Postfix is the final destination: the resolved RCPT TO domain
matches $mydestination, $inet_interfaces, $proxy_interfaces,
$virtual_alias_domains, or $virtual_mailbox_domains, and contains
no sender-specified routing (user@elsewhere@domain).

The relay_domains_reject_code parameter specifies the response
code for rejected requests (default: 554). 

defer_unauth_destination

 Reject the same requests as reject_unauth_destination, with a
non-permanent error code.  This feature is available in Postfix
2.10 and later.

reject_unknown_recipient_domain

Reject the request when Postfix is not final destination for
the recipient domain, and the RCPT TO domain has 1) no DNS MX and
no DNS A
record or 2) a malformed MX record such as a record with
a zero-length MX hostname (Postfix version 2.3 and later).  The
reply is specified with the unknown_address_reject_code parameter
(default: 450), unknown_address_tempfail_action (default:
defer_if_permit), or 556 (nullmx, Postfix 3.0 and
later). See the respective parameter descriptions for details.


reject_unlisted_recipient (with Postfix version 2.0: check_recipient_maps)

 Reject the request when the RCPT TO address is not listed in
the list of valid recipients for its domain class. See the
smtpd_reject_unlisted_recipient parameter description for details.
This feature is available in Postfix 2.1 and later.

reject_unverified_recipient

Reject the request when mail to the RCPT TO address is known
to bounce, or when the recipient address destination is not reachable.
Address verification information is managed by the verify(8) server;
see the ADDRESS_VERIFICATION_README file for details.   The
unverified_recipient_reject_code parameter specifies the numerical
response code when an address is known to bounce (default: 450,
change it to 550 when you are confident that it is safe to do so).
The unverified_recipient_defer_code parameter specifies the
numerical response code when an address probe failed due to a
temporary problem (default: 450).  The
unverified_recipient_tempfail_action parameter specifies the action
after address probe failure due to a temporary problem (default:
defer_if_permit).  This feature breaks for aliased addresses
with "enable_original_recipient = no" (Postfix &le; 3.2). 
This feature is available in Postfix 2.1 and later. 




Other restrictions that are valid in this context:




Generic restrictions that can be used
in any SMTP command context, described under smtpd_client_restrictions.

SMTP command specific restrictions described under
smtpd_client_restrictions, smtpd_helo_restrictions and
smtpd_sender_restrictions.




Example:



# The Postfix before 2.10 default mail relay policy. Later Postfix
# versions implement this preferably with <a href="postconf.5.html#smtpd_relay_restrictions">smtpd_relay_restrictions</a>.
<a href="postconf.5.html#smtpd_recipient_restrictions">smtpd_recipient_restrictions</a> = <a href="postconf.5.html#permit_mynetworks">permit_mynetworks</a>, <a href="postconf.5.html#reject_unauth_destination">reject_unauth_destination</a>



