# remote_header_rewrite_domain 

 Don't rewrite message headers from remote clients at all when
this parameter is empty; otherwise, rewrite message headers and
append the specified domain name to incomplete addresses.  The
local_header_rewrite_clients parameter controls what clients Postfix
considers local. 

 Examples:  

 The safe setting: append "domain.invalid" to incomplete header
addresses from remote SMTP clients, so that those addresses cannot
be confused with local addresses. 



<a href="postconf.5.html#remote_header_rewrite_domain">remote_header_rewrite_domain</a> = domain.invalid



 The default, purist, setting: don't rewrite headers from remote
clients at all. 



<a href="postconf.5.html#remote_header_rewrite_domain">remote_header_rewrite_domain</a> =




