# smtp_sasl_auth_cache_name 

 An optional table to prevent repeated SASL authentication
failures with the same remote SMTP server hostname, username and
password. Each table (key, value) pair contains a server name, a
username and password, and the full server response. This information
is stored when a remote SMTP server rejects an authentication attempt
with a 535 reply code.  As long as the smtp_sasl_password_maps
information does not change, and as long as the smtp_sasl_auth_cache_name
information does not expire (see smtp_sasl_auth_cache_time) the
Postfix SMTP client avoids SASL authentication attempts with the
same server, username and password, and instead bounces or defers
mail as controlled with the smtp_sasl_auth_soft_bounce configuration
parameter.  

 Use a per-destination delivery concurrency of 1 (for example,
"smtp_destination_concurrency_limit = 1",
"relay_destination_concurrency_limit = 1", etc.), otherwise multiple
delivery agents may experience a login failure at the same time.


 The table must be accessed via the proxywrite service, i.e. the
map name must start with "proxy:". The table should be stored under
the directory specified with the data_directory parameter. 

 This feature uses cryptographic hashing to protect plain-text
passwords, and requires that Postfix is compiled with TLS support.


 Example: 


<a href="postconf.5.html#smtp_sasl_auth_cache_name">smtp_sasl_auth_cache_name</a> = <a href="proxymap.8.html">proxy</a>:<a href="DATABASE_README.html#types">btree</a>:/var/lib/postfix/sasl_auth_cache


 This feature is available in Postfix 2.5 and later. 


