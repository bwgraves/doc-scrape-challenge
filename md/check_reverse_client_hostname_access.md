# check_reverse_client_hostname_access ; Search the specified access database for the unverified reverse
client hostname, parent domains, client IP address, or networks
obtained by stripping least significant octets. See the access(5)
manual page for details.  Note: a result of "OK" is not allowed for
safety reasons.  Instead, use DUNNO in order to exclude specific
hosts from denylists.  This feature is available in Postfix 2.6
and later.