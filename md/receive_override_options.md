# receive_override_options 

 Enable or disable recipient validation, built-in content
filtering, or address mapping. Typically, these are specified in
master.cf as command-line arguments for the smtpd(8), qmqpd(8) or
pickup(8) daemons. 

 Specify zero or more of the following options.  The options
override main.cf settings and are either implemented by smtpd(8),
qmqpd(8), or pickup(8) themselves, or they are forwarded to the
cleanup server.  



no_unknown_recipient_checks

Do not try to reject unknown recipients (SMTP server only).
This is typically specified AFTER an external content filter.


no_address_mappings

Disable canonical address mapping, virtual alias map expansion,
address masquerading, and automatic BCC (blind carbon-copy)
recipients. This is typically specified BEFORE an external content
filter. 

no_header_body_checks

Disable header/body_checks. This is typically specified AFTER
an external content filter. 

no_milters

Disable Milter (mail filter) applications. This is typically
specified AFTER an external content filter. 




Note: when the "BEFORE content filter" receive_override_options
setting is specified in the main.cf file, specify the "AFTER content
filter" receive_override_options setting in master.cf (and vice
versa).



Examples:



<a href="postconf.5.html#receive_override_options">receive_override_options</a> =
    <a href="postconf.5.html#no_unknown_recipient_checks">no_unknown_recipient_checks</a>, <a href="postconf.5.html#no_header_body_checks">no_header_body_checks</a>
<a href="postconf.5.html#receive_override_options">receive_override_options</a> = <a href="postconf.5.html#no_address_mappings">no_address_mappings</a>



This feature is available in Postfix 2.1 and later.



