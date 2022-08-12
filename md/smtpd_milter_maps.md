# smtpd_milter_maps (default:empty); 

 Lookup tables with Milter settings per remote SMTP client IP
address.  The lookup result overrides the smtpd_milters setting,
and has the same syntax. 

 Note: lookup tables cannot return empty responses. Specify a
lookup result of DISABLE (case does not matter) to indicate that
Milter support should be disabled. 

 Example to disable Milters for local clients: 


/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#smtpd_milter_maps">smtpd_milter_maps</a> = <a href="cidr_table.5.html">cidr</a>:/etc/postfix/smtpd_milter_map
    <a href="postconf.5.html#smtpd_milters">smtpd_milters</a> = inet:host:port, { inet:host:port, ... }, ...



/etc/postfix/smtpd_milter_map:
    # Disable Milters for local clients.
    127.0.0.0/8    DISABLE
    192.168.0.0/16 DISABLE
    ::/64          DISABLE
    2001:db8::/32  DISABLE


 This feature is available in Postfix 3.2 and later.  


