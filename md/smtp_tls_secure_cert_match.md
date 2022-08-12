# smtp_tls_secure_cert_match (default:nexthop,dot-nexthop) 

 How the Postfix SMTP client verifies the server certificate
peername for the "secure" TLS security level. In a "secure" TLS policy table
($smtp_tls_policy_maps) entry the optional "match" attribute
overrides this main.cf setting. 

 This parameter specifies one or more patterns or strategies separated
by commas, whitespace or colons.  In the policy table the only valid
separator is the colon character. 

 For a description of the pattern and strategy syntax see the
smtp_tls_verify_cert_match parameter. The "hostname" strategy should
be avoided in this context, as in the absence of a secure global DNS, using
the results of MX lookups in certificate verification is not immune to active
(man-in-the-middle) attacks on DNS. 


Sample main.cf setting:




<a href="postconf.5.html#smtp_tls_secure_cert_match">smtp_tls_secure_cert_match</a> = nexthop




Sample policy table override:




example.net     secure match=example.com:.example.com
.example.net    secure match=example.com:.example.com



 This feature is available in Postfix 2.3 and later. 


