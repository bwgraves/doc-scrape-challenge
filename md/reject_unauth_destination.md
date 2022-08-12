# reject_unauth_destination Reject the request unless one of the following is true:



 Postfix is a mail forwarder: the resolved RCPT TO domain matches
$relay_domains or a subdomain thereof, and contains no sender-specified
routing (user@elsewhere@domain),

 Postfix is the final destination: the resolved RCPT TO domain
matches $mydestination, $inet_interfaces, $proxy_interfaces,
$virtual_alias_domains, or $virtual_mailbox_domains, and contains
no sender-specified routing (user@elsewhere@domain).

The relay_domains_reject_code parameter specifies the response
code for rejected requests (default: 554). 