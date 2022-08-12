# disable_dns_lookups 


Disable DNS lookups in the Postfix SMTP and LMTP clients. When
disabled, hosts are looked up with the getaddrinfo() system
library routine which normally also looks in /etc/hosts.  As of
Postfix 2.11, this parameter is deprecated; use smtp_dns_support_level
instead.



DNS lookups are enabled by default.


