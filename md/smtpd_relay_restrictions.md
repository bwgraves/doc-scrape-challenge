# smtpd_relay_restrictions (default: 

 Access restrictions for mail relay control that the Postfix
SMTP server applies in the context of the RCPT TO command, before
smtpd_recipient_restrictions.
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


By default, the Postfix SMTP server accepts:




 Mail from clients whose IP address matches $mynetworks, or:

 Mail from clients who are SASL authenticated, or:

 Mail to remote destinations that match $relay_domains, except
for addresses that contain sender-specified routing
(user@elsewhere@domain), or:

 Mail to local destinations that match $inet_interfaces
or $proxy_interfaces, $mydestination, $virtual_alias_domains, or
$virtual_mailbox_domains.




IMPORTANT: Either the smtpd_relay_restrictions or the
smtpd_recipient_restrictions parameter must specify
at least one of the following restrictions. Otherwise Postfix will
refuse to receive mail:




reject, <a href="postconf.5.html#reject_unauth_destination">reject_unauth_destination</a>





defer, <a href="postconf.5.html#defer_if_permit">defer_if_permit</a>, <a href="postconf.5.html#defer_unauth_destination">defer_unauth_destination</a>




Specify a list of restrictions, separated by commas and/or whitespace.
Continue long lines by starting the next line with whitespace.
The same restrictions are available as documented under
smtpd_recipient_restrictions.


 This feature is available in Postix 2.10 and later. 


