# smtp_bind_address6 (default:empty) 


An optional numerical network address that the Postfix SMTP client
should bind to when making an IPv6 connection.


 This feature is available in Postfix 2.2 and later. 


This can be specified in the main.cf file for all SMTP clients, or
it can be specified in the master.cf file for a specific client,
for example:




/etc/postfix/<a href="master.5.html">master.cf</a>:
    smtp ... smtp -o <a href="postconf.5.html#smtp_bind_address6">smtp_bind_address6</a>=1:2:3:4:5:6:7:8



 See smtp_bind_address_enforce for how Postfix should handle
errors (Postfix 3.7 and later). 

 Note 1: when inet_interfaces specifies no more than one IPv6
address, and that address is a non-loopback address, it is
automatically used as the smtp_bind_address6.  This supports virtual
IP hosting, but can be a problem on multi-homed firewalls. See the
inet_interfaces documentation for more detail. 

 Note 2: address information may be enclosed inside [],
but this form is not recommended here. 


