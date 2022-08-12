# relayhost 


The next-hop destination(s) for non-local mail; overrides non-local
domains in recipient addresses. This information is overruled with
relay_transport, sender_dependent_default_transport_maps,
default_transport, sender_dependent_relayhost_maps
and with the transport(5) table.



On an intranet, specify the organizational domain name. If your
internal DNS uses no MX records, specify the name of the intranet
gateway host instead.



In the case of SMTP or LMTP delivery, specify one or more destinations
in the form of a domain name, hostname, hostname:port, [hostname]:port,
[hostaddress] or [hostaddress]:port, separated by comma or whitespace.
The form [hostname] turns off MX lookups. Multiple destinations are
supported in Postfix 3.5 and later.



If you're connected via UUCP, see the UUCP_README file for useful
information.



Examples:



<a href="postconf.5.html#relayhost">relayhost</a> = $<a href="postconf.5.html#mydomain">mydomain</a>
<a href="postconf.5.html#relayhost">relayhost</a> = [gateway.example.com]
<a href="postconf.5.html#relayhost">relayhost</a> = mail1.example:587, mail2.example:587
<a href="postconf.5.html#relayhost">relayhost</a> = [an.ip.add.ress]



