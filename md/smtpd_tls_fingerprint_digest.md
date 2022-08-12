# smtpd_tls_fingerprint_digest (default:see"postconf-d"output); 

 The message digest algorithm to construct remote SMTP client-certificate
fingerprints or public key fingerprints (Postfix 2.9 and later) for
check_ccert_access and permit_tls_clientcerts. 

 The default algorithm is sha256 with Postfix &ge; 3.6
and the compatibility_level set to 3.6 or higher. With Postfix
&le; 3.5, the default algorithm is md5. 

 The best-practice algorithm is now sha256. Recent advances in hash
function cryptanalysis have led to md5 and sha1 being deprecated in favor of
sha256.  However, as long as there are no known "second pre-image" attacks
against the older algorithms, their use in this context, though not
recommended, is still likely safe.  

 While additional digest algorithms are often available with OpenSSL's
libcrypto, only those used by libssl in SSL cipher suites are available to
Postfix.  You'll likely find support for md5, sha1, sha256 and sha512. 

 To find the fingerprint of a specific certificate file, with a
specific digest algorithm, run: 



$ openssl x509 -noout -fingerprint -<i>digest</i> -in <i>certfile</i>.pem



 The text to the right of "=" sign is the desired fingerprint.
For example: 



$ openssl x509 -noout -fingerprint -sha256 -in cert.pem
SHA256 Fingerprint=D4:6A:AB:19:24:...:A6:CB:66:82:C0:8E:9B:EE:29:A8:1A



 To extract the public key fingerprint from an X.509 certificate,
you need to extract the public key from the certificate and compute
the appropriate digest of its DER (ASN.1) encoding. With OpenSSL
the "-pubkey" option of the "x509" command extracts the public
key always in "PEM" format. We pipe the result to another OpenSSL
command that converts the key to DER and then to the "dgst" command
to compute the fingerprint. 

 Example: 


$ openssl x509 -in cert.pem -noout -pubkey |
    openssl pkey -pubin -outform DER |
    openssl dgst -sha256 -c
(stdin)= 64:3f:1f:f6:e5:1e:d4:2a:56:8b:fc:09:1a:61:98:b5:bc:7c:60:58



 The Postfix SMTP server and client log the peer (leaf) certificate
fingerprint and public key fingerprint when the TLS loglevel is 2 or
higher. 

 Example: client-certificate access table, with sha256 fingerprints: 



/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#smtpd_tls_fingerprint_digest">smtpd_tls_fingerprint_digest</a> = sha256
    <a href="postconf.5.html#smtpd_client_restrictions">smtpd_client_restrictions</a> =
        <a href="postconf.5.html#check_ccert_access">check_ccert_access</a> <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/access,
        reject


/etc/postfix/access:
    # Action folded to next line...
    AF:88:7C:AD:51:95:6F:36:96:...:01:FB:2E:48:CD:AB:49:25:A2:3B
        OK
    85:16:78:FD:73:6E:CE:70:E0:...:5F:0D:3C:C8:6D:C4:2C:24:59:E1
        <a href="postconf.5.html#permit_auth_destination">permit_auth_destination</a>



 This feature is available in Postfix 2.5 and later. 


