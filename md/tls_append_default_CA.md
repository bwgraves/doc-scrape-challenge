# tls_append_default_CA (default:no) 

 Append the system-supplied default Certification Authority
certificates to the ones specified with *_tls_CApath or *_tls_CAfile.
The default is "no"; this prevents Postfix from trusting third-party
certificates and giving them relay permission with
permit_tls_all_clientcerts.  

 This feature is available in Postfix 2.4.15, 2.5.11, 2.6.8,
2.7.2 and later versions. Specify "tls_append_default_CA = yes" for
backwards compatibility, to avoid breaking certificate verification
with sites that don't use permit_tls_all_clientcerts. 


