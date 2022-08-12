# permit_mx_backup undefined; Permit the request when the local mail system is a backup MX for
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

