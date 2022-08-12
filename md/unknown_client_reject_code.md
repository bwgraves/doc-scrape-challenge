# unknown_client_reject_code (default:450) 


The numerical Postfix SMTP server response code when a client
without valid address &lt;=&gt; name mapping is rejected by the
reject_unknown_client_hostname restriction. The SMTP server always replies
with 450 when the mapping failed due to a temporary error condition.



Do not change this unless you have a complete understanding of RFC 5321.



