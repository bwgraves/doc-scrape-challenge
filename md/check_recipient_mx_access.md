# check_recipient_mx_access  Search the specified access(5) database for the MX hosts for
the RCPT TO domain, and execute the corresponding action.  If no
MX record is found, look up A or AAAA records, just like the Postfix
SMTP client would. Note:
a result of "OK" is not allowed for safety reasons. Instead, use
DUNNO in order to exclude specific hosts from denylists.  This
feature is available in Postfix 2.1 and later. 