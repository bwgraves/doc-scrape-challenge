# postscreen_dnsbl_allowlist_threshold (default:0); 

 Allow a remote SMTP client to skip "before" and "after 220
greeting" protocol tests, based on its combined DNSBL score as
defined with the postscreen_dnsbl_sites parameter.  

 Specify a negative value to enable this feature. When a client
passes the postscreen_dnsbl_allowlist_threshold without having
failed other tests, all pending or disabled tests are flagged as
completed with a time-to-live value equal to postscreen_dnsbl_ttl.
When a test was already completed, its time-to-live value is updated
if it was less than postscreen_dnsbl_ttl. 

 This feature is available in Postfix 3.6 and later.  

 Available as postscreen_dnsbl_whitelist_threshold in Postfix 2.11
- 3.5.  


