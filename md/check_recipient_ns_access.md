# check_recipient_ns_access  Search the specified access(5) database for the DNS servers
for the RCPT TO domain, and execute the corresponding action.
Note: a result of "OK" is not allowed for safety reasons. Instead,
use DUNNO in order to exclude specific hosts from denylists.  This
feature is available in Postfix 2.1 and later.  