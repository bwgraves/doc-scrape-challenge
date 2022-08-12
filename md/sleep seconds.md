# sleep seconds Pause for the specified number of seconds and proceed with
the next restriction in the list, if any. This may stop zombie
mail when used as:

/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#smtpd_client_restrictions">smtpd_client_restrictions</a> =
        sleep 1, <a href="postconf.5.html#reject_unauth_pipelining">reject_unauth_pipelining</a>
    <a href="postconf.5.html#smtpd_delay_reject">smtpd_delay_reject</a> = no

This feature is available in Postfix 2.3. 