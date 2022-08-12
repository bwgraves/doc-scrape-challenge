# relay_clientcerts (default:empty); 

 List of tables with remote SMTP client-certificate fingerprints or
public key fingerprints (Postfix 2.9 and later) for which the Postfix
SMTP server will allow access with the permit_tls_clientcerts
feature.  The fingerprint digest algorithm is configurable via the
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

 Postfix lookup tables are in the form of (key, value) pairs.
Since we only need the key, the value can be chosen freely, e.g.
the name of the user or host:
D7:04:2F:A7:0B:8C:A5:21:FA:31:77:E1:41:8A:EE:80 lutzpc.at.home 

 Example: 


<a href="postconf.5.html#relay_clientcerts">relay_clientcerts</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/relay_clientcerts


For more fine-grained control, use check_ccert_access to select
an appropriate access(5) policy for each client.
See RESTRICTION_CLASS_README.

This feature is available with Postfix version 2.2.


