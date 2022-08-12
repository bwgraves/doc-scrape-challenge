# local_header_rewrite_clients (default: 

 Rewrite message header addresses in mail from these clients and
update incomplete addresses with the domain name in $myorigin or
$mydomain; either don't rewrite message headers from other clients
at all, or rewrite message headers and update incomplete addresses
with the domain specified in the remote_header_rewrite_domain
parameter.  

 See the append_at_myorigin and append_dot_mydomain parameters
for details of how domain names are appended to incomplete addresses.


 Specify a list of zero or more of the following:  



permit_inet_interfaces

 Append the domain name in $myorigin or $mydomain when the
client IP address matches $inet_interfaces. This is enabled by
default. 

permit_mynetworks

 Append the domain name in $myorigin or $mydomain when the
client IP address matches any network or network address listed in
$mynetworks. This setting will not prevent remote mail header
address rewriting when mail from a remote client is forwarded by
a neighboring system.  

permit_sasl_authenticated 

 Append the domain name in $myorigin or $mydomain when the
client is successfully authenticated via the RFC 4954 (AUTH)
protocol. 

permit_tls_clientcerts 

 Append the domain name in $myorigin or $mydomain when the
remote SMTP client TLS certificate fingerprint or public key fingerprint
(Postfix 2.9 and later) is listed in $relay_clientcerts.
The fingerprint digest algorithm is configurable via the
smtpd_tls_fingerprint_digest parameter (hard-coded as md5 prior to
Postfix version 2.5).  

 The default algorithm is sha256 with Postfix &ge; 3.6
and the compatibility_level set to 3.6 or higher. With Postfix
&le; 3.5, the default algorithm is md5.  The best-practice
algorithm is now sha256. Recent advances in hash function
cryptanalysis have led to md5 and sha1 being deprecated in favor of
sha256.  However, as long as there are no known "second pre-image"
attacks against the older algorithms, their use in this context, though
not recommended, is still likely safe.  

permit_tls_all_clientcerts 

 Append the domain name in $myorigin or $mydomain when the
remote SMTP client TLS certificate is successfully verified, regardless of
whether it is listed on the server, and regardless of the certifying
authority. 

check_address_map type:table 

type:table 

 Append the domain name in $myorigin or $mydomain when the
client IP address matches the specified lookup table.
The lookup result is ignored, and no subnet lookup is done. This
is suitable for, e.g., pop-before-smtp lookup tables. 



 Examples:  

 The Postfix &lt; 2.2 backwards compatible setting: always rewrite
message headers, and always append my own domain to incomplete
header addresses.  



<a href="postconf.5.html#local_header_rewrite_clients">local_header_rewrite_clients</a> = <a href="DATABASE_README.html#types">static</a>:all



 The purist (and default) setting: rewrite headers only in mail
from Postfix sendmail and in SMTP mail from this machine. 



<a href="postconf.5.html#local_header_rewrite_clients">local_header_rewrite_clients</a> = <a href="postconf.5.html#permit_inet_interfaces">permit_inet_interfaces</a>



 The intermediate setting: rewrite header addresses and append
$myorigin or $mydomain information only with mail from Postfix
sendmail, from local clients, or from authorized SMTP clients. 

 Note: this setting will not prevent remote mail header address
rewriting when mail from a remote client is forwarded by a neighboring
system.  



<a href="postconf.5.html#local_header_rewrite_clients">local_header_rewrite_clients</a> = <a href="postconf.5.html#permit_mynetworks">permit_mynetworks</a>,
    <a href="postconf.5.html#permit_sasl_authenticated">permit_sasl_authenticated</a> <a href="postconf.5.html#permit_tls_clientcerts">permit_tls_clientcerts</a>
    <a href="postconf.5.html#check_address_map">check_address_map</a> <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/pop-before-smtp




