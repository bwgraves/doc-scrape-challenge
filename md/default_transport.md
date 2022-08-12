# default_transport (default:smtp) 


The default mail delivery transport and next-hop destination for
destinations that do not match $mydestination, $inet_interfaces,
$proxy_interfaces, $virtual_alias_domains, $virtual_mailbox_domains,
or $relay_domains.  This information can be overruled with the
sender_dependent_default_transport_maps parameter and with the
transport(5) table. 


In order of decreasing precedence, the nexthop destination is taken
from $sender_dependent_default_transport_maps, $default_transport,
$sender_dependent_relayhost_maps, $relayhost, or from the recipient
domain.



Specify a string of the form transport:nexthop, where transport
is the name of a mail delivery transport defined in master.cf.
The :nexthop destination is optional; its syntax is documented
in the manual page of the corresponding delivery agent. In the case of
SMTP or LMTP, specify one or more destinations separated by comma or
whitespace (with Postfix 3.5 and later).



Example:



<a href="postconf.5.html#default_transport">default_transport</a> = uucp:relayhostname



