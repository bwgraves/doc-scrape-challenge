# smtpd_helo_restrictions (default:empty); 


Optional restrictions that the Postfix SMTP server applies in the
context of a client HELO command.
See SMTPD_ACCESS_README, section "Delayed evaluation of SMTP access
restriction lists" for a discussion of evaluation context and time.



The default is to permit everything.


 Note: specify "smtpd_helo_required = yes" to fully enforce this
restriction (without "smtpd_helo_required = yes", a client can
simply skip smtpd_helo_restrictions by not sending HELO or EHLO).



Specify a list of restrictions, separated by commas and/or whitespace.
Continue long lines by starting the next line with whitespace.
Restrictions are applied in the order as specified; the first
restriction that matches wins.



The following restrictions are specific to the hostname information
received with the HELO or EHLO command.




check_helo_access type:table

Search the specified access(5) database for the HELO or EHLO
hostname or parent domains, and execute the corresponding action.
Note: specify "smtpd_helo_required = yes" to fully enforce this
restriction (without "smtpd_helo_required = yes", a client can
simply skip check_helo_access by not sending HELO or EHLO).  

check_helo_a_access type:table

Search the specified access(5) database for the IP addresses for
the HELO or EHLO hostname, and execute the corresponding action.
Note 1: a result of "OK" is not allowed for safety reasons. Instead,
use DUNNO in order to exclude specific hosts from denylists.  Note
2: specify "smtpd_helo_required = yes" to fully enforce this
restriction (without "smtpd_helo_required = yes", a client can
simply skip check_helo_a_access by not sending HELO or EHLO).  This
feature is available in Postfix 3.0 and later.


check_helo_mx_access type:table

Search the specified access(5) database for the MX hosts for
the HELO or EHLO hostname, and execute the corresponding action.
If no MX record is found, look up A or AAAA records, just like the
Postfix SMTP client would.
Note 1: a result of "OK" is not allowed for safety reasons. Instead,
use DUNNO in order to exclude specific hosts from denylists.  Note
2: specify "smtpd_helo_required = yes" to fully enforce this
restriction (without "smtpd_helo_required = yes", a client can
simply skip check_helo_mx_access by not sending HELO or EHLO).  This
feature is available in Postfix 2.1 and later.


check_helo_ns_access type:table

Search the specified access(5) database for the DNS servers
for the HELO or EHLO hostname, and execute the corresponding action.
Note 1: a result of "OK" is not allowed for safety reasons. Instead,
use DUNNO in order to exclude specific hosts from denylists.  Note
2: specify "smtpd_helo_required = yes" to fully enforce this
restriction (without "smtpd_helo_required = yes", a client can
simply skip check_helo_ns_access by not sending HELO or EHLO). This
feature is available in Postfix 2.1 and later.


reject_invalid_helo_hostname (with Postfix &lt; 2.3: reject_invalid_hostname)

Reject the request when the HELO or EHLO hostname is malformed.
Note: specify "smtpd_helo_required = yes" to fully enforce
this restriction (without "smtpd_helo_required = yes", a client can simply
skip reject_invalid_helo_hostname by not sending HELO or EHLO).
 The invalid_hostname_reject_code specifies the response code
for rejected requests (default: 501).

reject_non_fqdn_helo_hostname (with Postfix &lt; 2.3: reject_non_fqdn_hostname)

Reject the request when the HELO or EHLO hostname is not in
fully-qualified domain or address literal form, as required by the
RFC. Note: specify
"smtpd_helo_required = yes" to fully enforce this restriction
(without "smtpd_helo_required = yes", a client can simply skip
reject_non_fqdn_helo_hostname by not sending HELO or EHLO).  
The non_fqdn_reject_code parameter specifies the response code for
rejected requests (default: 504).

reject_rhsbl_helo rbl_domain=d.d.d.d

Reject the request when the HELO or EHLO hostname is
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

reject_unknown_helo_hostname (with Postfix &lt; 2.3: reject_unknown_hostname)

Reject the request when the HELO or EHLO hostname has no DNS A
or MX record.  The reply is specified with the
unknown_hostname_reject_code parameter (default: 450) or
unknown_helo_hostname_tempfail_action (default: defer_if_permit).
See the respective parameter descriptions for details. 
Note: specify "smtpd_helo_required = yes" to fully
enforce this restriction (without "smtpd_helo_required = yes", a
client can simply skip reject_unknown_helo_hostname by not sending
HELO or EHLO). 




Other restrictions that are valid in this context:




 Generic restrictions that can be used
in any SMTP command context, described under smtpd_client_restrictions.

 Client hostname or network address specific restrictions
described under smtpd_client_restrictions.

 SMTP command specific restrictions described under
smtpd_sender_restrictions or smtpd_recipient_restrictions.  When
sender or recipient restrictions are listed under smtpd_helo_restrictions,
they have effect only with "smtpd_delay_reject = yes", so that
$smtpd_helo_restrictions is evaluated at the time of the RCPT TO
command.




Examples:



<a href="postconf.5.html#smtpd_helo_restrictions">smtpd_helo_restrictions</a> = <a href="postconf.5.html#permit_mynetworks">permit_mynetworks</a>, <a href="postconf.5.html#reject_invalid_helo_hostname">reject_invalid_helo_hostname</a>
<a href="postconf.5.html#smtpd_helo_restrictions">smtpd_helo_restrictions</a> = <a href="postconf.5.html#permit_mynetworks">permit_mynetworks</a>, <a href="postconf.5.html#reject_unknown_helo_hostname">reject_unknown_helo_hostname</a>



