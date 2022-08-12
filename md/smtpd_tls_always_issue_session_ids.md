# smtpd_tls_always_issue_session_ids 

 Force the Postfix SMTP server to issue a TLS session id, even
when TLS session caching is turned off (smtpd_tls_session_cache_database
is empty). This behavior is compatible with Postfix &lt; 2.3. 

 With Postfix 2.3 and later the Postfix SMTP server can disable
session id generation when TLS session caching is turned off. This
keeps remote SMTP clients from caching sessions that almost certainly cannot
be re-used.  

 By default, the Postfix SMTP server always generates TLS session
ids. This works around a known defect in mail client applications
such as MS Outlook, and may also prevent interoperability issues
with other MTAs. 

 Example: 


<a href="postconf.5.html#smtpd_tls_always_issue_session_ids">smtpd_tls_always_issue_session_ids</a> = no


 This feature is available in Postfix 2.3 and later. 


