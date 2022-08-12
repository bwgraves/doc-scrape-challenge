# openssl_path 


The location of the OpenSSL command line program openssl(1).  This
is used by the "postfix tls" command to create private keys,
certificate signing requests, self-signed certificates, and to
compute public key digests for DANE TLSA records.  In multi-instance
environments, this parameter is always determined from the configuration
of the default Postfix instance.


 Example: 



/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    # NetBSD pkgsrc:
    <a href="postconf.5.html#openssl_path">openssl_path</a> = /usr/pkg/bin/openssl
    # Local build:
    <a href="postconf.5.html#openssl_path">openssl_path</a> = /usr/local/bin/openssl




This feature is available in Postfix 3.1 and later.



