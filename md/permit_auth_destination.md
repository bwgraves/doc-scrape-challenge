# permit_auth_destination undefined Permit the request when one of the following is true:



 Postfix is a mail forwarder: the resolved RCPT TO domain matches
$relay_domains or a subdomain thereof, and the address contains no
sender-specified routing (user@elsewhere@domain),

 Postfix is the final destination: the resolved RCPT TO domain
matches $mydestination, $inet_interfaces, $proxy_interfaces,
$virtual_alias_domains, or $virtual_mailbox_domains, and the address
contains no sender-specified routing (user@elsewhere@domain).

