# qmqpd_authorized_clients 


What remote QMQP clients are allowed to connect to the Postfix QMQP
server port.



By default, no client is allowed to use the service. This is
because the QMQP server will relay mail to any destination.



Specify a list of client patterns. A list pattern specifies a host
name, a domain name, an internet address, or a network/mask pattern,
where the mask specifies the number of bits in the network part.
When a pattern specifies a file name, its contents are substituted
for the file name; when a pattern is a "type:table" table specification,
table lookup is used instead.  


Patterns are separated by whitespace and/or commas. In order to
reverse the result, precede a pattern with an
exclamation point (!). The form "!/file/name" is supported only
in Postfix version 2.4 and later.


 Pattern matching of domain names is controlled by the presence
or absence of "qmqpd_authorized_clients" in the
parent_domain_matches_subdomains parameter value.  


Example:



<a href="postconf.5.html#qmqpd_authorized_clients">qmqpd_authorized_clients</a> = !192.168.0.1, 192.168.0.0/24



