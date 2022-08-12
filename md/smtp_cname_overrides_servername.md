# smtp_cname_overrides_servername 

 When the remote SMTP servername is a DNS CNAME, replace the
servername with the result from CNAME expansion for the purpose of
logging, SASL password lookup, TLS
policy decisions, or TLS certificate verification. The value "no"
hardens Postfix smtp_tls_per_site hostname-based policies against
false hostname information in DNS CNAME records, and makes SASL
password file lookups more predictable. This is the default setting
as of Postfix 2.3. 

 When DNS CNAME records are validated with secure DNS lookups
(smtp_dns_support_level = dnssec), they are always allowed to
override the above servername (Postfix 2.11 and later). 

 This feature is available in Postfix 2.2.9 and later. 


