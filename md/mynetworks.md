# mynetworks (default:see"postconf-d"output) 


The list of "trusted" remote SMTP clients that have more privileges than
"strangers".



In particular, "trusted" SMTP clients are allowed to relay mail
through Postfix.  See the smtpd_relay_restrictions parameter
description in the postconf(5) manual.



You can specify the list of "trusted" network addresses by hand
or you can let Postfix do it for you (which is the default).
See the description of the mynetworks_style parameter for more
information.



If you specify the mynetworks list by hand,
Postfix ignores the mynetworks_style setting.


 Specify a list of network addresses or network/netmask patterns,
separated by commas and/or whitespace. Continue long lines by
starting the next line with whitespace. 

 The netmask specifies the number of bits in the network part
of a host address.  You can also specify "/file/name" or "type:table"
patterns.  A "/file/name" pattern is replaced by its contents; a
"type:table" lookup table is matched when a table entry matches a
lookup string (the lookup result is ignored). 

 The list is matched left to right, and the search stops on the
first match.  Specify "!pattern" to exclude an address or network
block from the list. The form "!/file/name" is supported only
in Postfix version 2.4 and later. 

 Note 1: Pattern matching of domain names is controlled by the
presence or absence of "mynetworks" in the parent_domain_matches_subdomains
parameter value.  

 Note 2: IP version 6 address information must be specified inside
[] in the mynetworks value, and in files specified with
"/file/name".  IP version 6 addresses contain the ":" character,
and would otherwise be confused with a "type:table" pattern.  

 Note 3: CIDR ranges cannot be specified in hash tables.  Use cidr
tables if CIDR ranges are used. 

 Examples:  


<a href="postconf.5.html#mynetworks">mynetworks</a> = 127.0.0.0/8 168.100.189.0/28
<a href="postconf.5.html#mynetworks">mynetworks</a> = !192.168.0.1, 192.168.0.0/28
<a href="postconf.5.html#mynetworks">mynetworks</a> = 127.0.0.0/8 168.100.189.0/28 [::1]/128 [2001:240:587::]/64
<a href="postconf.5.html#mynetworks">mynetworks</a> = $<a href="postconf.5.html#config_directory">config_directory</a>/mynetworks
<a href="postconf.5.html#mynetworks">mynetworks</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/network_table
<a href="postconf.5.html#mynetworks">mynetworks</a> = <a href="cidr_table.5.html">cidr</a>:/etc/postfix/network_table.cidr



