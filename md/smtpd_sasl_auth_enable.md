# smtpd_sasl_auth_enable (default:no); 


Enable SASL authentication in the Postfix SMTP server. By default,
the Postfix SMTP server does not use authentication.



If a remote SMTP client is authenticated, the permit_sasl_authenticated
access restriction can be used to permit relay access, like this:




# With Postfix 2.10 and later, the mail relay policy is
# preferably specified under <a href="postconf.5.html#smtpd_relay_restrictions">smtpd_relay_restrictions</a>.
<a href="postconf.5.html#smtpd_relay_restrictions">smtpd_relay_restrictions</a> =
    <a href="postconf.5.html#permit_mynetworks">permit_mynetworks</a>, <a href="postconf.5.html#permit_sasl_authenticated">permit_sasl_authenticated</a>, ...



# With Postfix before 2.10, the relay policy can be
# specified only under <a href="postconf.5.html#smtpd_recipient_restrictions">smtpd_recipient_restrictions</a>.
<a href="postconf.5.html#smtpd_recipient_restrictions">smtpd_recipient_restrictions</a> =
    <a href="postconf.5.html#permit_mynetworks">permit_mynetworks</a>, <a href="postconf.5.html#permit_sasl_authenticated">permit_sasl_authenticated</a>, ...



 To reject all SMTP connections from unauthenticated clients,
specify "smtpd_delay_reject = yes" (which is the default) and use:




<a href="postconf.5.html#smtpd_client_restrictions">smtpd_client_restrictions</a> = <a href="postconf.5.html#permit_sasl_authenticated">permit_sasl_authenticated</a>, reject




See the SASL_README file for SASL configuration and operation details.



