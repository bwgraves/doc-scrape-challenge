# smtp_dns_reply_filter (default:empty); 

 Optional filter for Postfix SMTP client DNS lookup results.
Specify zero or more lookup tables.  The lookup tables are searched
in the given order for a match with the DNS lookup result, converted
to the following form: 


    <i>name ttl class type preference value</i>


 The class field is always "IN", the preference
field exists only for MX records, the names of hosts, domains, etc.
end in ".", and those names are in ASCII form (xn--mumble form in
the case of UTF8 names).  

 When a match is found, the table lookup result specifies an
action.  By default, the table query and the action name are
case-insensitive.  Currently, only the IGNORE action is
implemented.  

 Notes: 



  Postfix DNS reply filters have no effect on implicit DNS
lookups through nsswitch.conf or equivalent mechanisms.  

  The Postfix SMTP/LMTP client uses smtp_dns_reply_filter
and lmtp_dns_reply_filter only to discover a remote SMTP or LMTP
service (record types MX, A, AAAA, and TLSA).  These lookups are
also made to implement the features reject_unverified_sender and
reject_unverified_recipient.  

  The Postfix SMTP/LMTP client defers mail delivery when
a filter removes all lookup results from a successful query.  

  Postfix SMTP server uses smtpd_dns_reply_filter only to
look up MX, A, AAAA, and TXT records to implement the features
reject_unknown_helo_hostname, reject_unknown_sender_domain,
reject_unknown_recipient_domain, reject_rbl_*, and reject_rhsbl_*.


  The Postfix SMTP server logs a warning or defers mail
delivery when a filter removes all lookup results from a successful
query.  



 Example: ignore Google AAAA records in Postfix SMTP client DNS
lookups, because Google sometimes hard-rejects mail from IPv6 clients
with valid PTR etc. records. 


/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#smtp_dns_reply_filter">smtp_dns_reply_filter</a> = <a href="pcre_table.5.html">pcre</a>:/etc/postfix/smtp_dns_reply_filter



/etc/postfix/smtp_dns_reply_filter:
    # /domain ttl IN AAAA address/ action, all case-insensitive.
    # Note: the domain name ends in ".".
    /^\S+\.google\.com\.\s+\S+\s+\S+\s+AAAA\s+/ IGNORE


 This feature is available in Postfix 3.0 and later. 


