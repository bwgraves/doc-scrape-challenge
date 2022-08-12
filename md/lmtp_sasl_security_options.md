# lmtp_sasl_security_options (default:noplaintext,noanonymous) 

 SASL security options; as of Postfix 2.3 the list of available
features depends on the SASL client implementation that is selected
with lmtp_sasl_type.  

 The following security features are defined for the cyrus
client SASL implementation: 



noplaintext

Disallow authentication methods that use plaintext passwords. 

noactive

Disallow authentication methods that are vulnerable to non-dictionary
active attacks. 

nodictionary

Disallow authentication methods that are vulnerable to passive
dictionary attacks. 

noanonymous

Disallow anonymous logins. 




Example:



<a href="postconf.5.html#lmtp_sasl_security_options">lmtp_sasl_security_options</a> = noplaintext



