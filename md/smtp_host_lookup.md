# smtp_host_lookup (default:dns); 


What mechanisms the Postfix SMTP client uses to look up a host's
IP address.  This parameter is ignored when DNS lookups are disabled
(see: disable_dns_lookups and smtp_dns_support_level).  The "dns"
mechanism is always tried before "native" if both are listed.



Specify one of the following:




dns

Hosts can be found in the DNS (preferred).  

native

Use the native naming service only (nsswitch.conf, or equivalent
mechanism).  

dns, native

Use the native service for hosts not found in the DNS.  




This feature is available in Postfix 2.1 and later.



