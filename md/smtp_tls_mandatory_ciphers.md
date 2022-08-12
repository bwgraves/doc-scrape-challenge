# smtp_tls_mandatory_ciphers (default:medium); 

 The minimum TLS cipher grade that the Postfix SMTP client will
use with
mandatory TLS encryption.  The default value "medium" is suitable
for most destinations with which you may want to enforce TLS, and
is beyond the reach of today's cryptanalytic methods. See
smtp_tls_policy_maps for information on how to configure ciphers
on a per-destination basis. 

 The following cipher grades are supported: 


export
 Enable "EXPORT" grade or better OpenSSL ciphers.  The underlying
cipherlist is specified via the tls_export_cipherlist configuration
parameter, which you are strongly encouraged not to change.  This
choice is insecure and SHOULD NOT be used.  

low
 Enable "LOW" grade or better OpenSSL ciphers.  The underlying
cipherlist is specified via the tls_low_cipherlist configuration
parameter, which you are strongly encouraged not to change.  This
choice is insecure and SHOULD NOT be used.  

medium
 Enable "MEDIUM" grade or better OpenSSL ciphers.
The underlying cipherlist is specified via the tls_medium_cipherlist
configuration parameter, which you are strongly encouraged not to change.


high
 Enable only "HIGH" grade OpenSSL ciphers.  This setting may
be appropriate when all mandatory TLS destinations (e.g. when all
mail is routed to a suitably capable relayhost) support at least one
"HIGH" grade cipher. The underlying cipherlist is specified via the
tls_high_cipherlist configuration parameter, which you are strongly
encouraged not to change. 

null
 Enable only the "NULL" OpenSSL ciphers, these provide authentication
without encryption.  This setting is only appropriate in the rare case
that all servers are prepared to use NULL ciphers (not normally enabled
in TLS servers). A plausible use-case is an LMTP server listening on a
UNIX-domain socket that is configured to support "NULL" ciphers. The
underlying cipherlist is specified via the tls_null_cipherlist
configuration parameter, which you are strongly encouraged not to
change. 



 The underlying cipherlists for grades other than "null" include
anonymous ciphers, but these are automatically filtered out if the
Postfix SMTP client is configured to verify server certificates.
You are very unlikely to need to take any steps to exclude anonymous
ciphers, they are excluded automatically as necessary.  If you must
exclude anonymous ciphers at the "may" or "encrypt" security levels,
when the Postfix SMTP client does not need or use peer certificates, set
"smtp_tls_exclude_ciphers = aNULL". To exclude anonymous ciphers only when
TLS is enforced, set "smtp_tls_mandatory_exclude_ciphers = aNULL". 

 This feature is available in Postfix 2.3 and later. 


