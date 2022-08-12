# check_sasl_access   Use the remote SMTP client SASL user name as the lookup key for
the specified access(5) database. The lookup key has the form
"username@domainname" when the smtpd_sasl_local_domain parameter
value is non-empty.  Unlike the check_client_access feature,
check_sasl_access does not perform matches of parent domains or IP
subnet ranges.  This feature is available with Postfix version 2.11
and later. 