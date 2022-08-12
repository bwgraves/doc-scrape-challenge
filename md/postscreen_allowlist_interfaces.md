# postscreen_allowlist_interfaces 

 A list of local postscreen(8) server IP addresses where a
non-allowlisted remote SMTP client can obtain postscreen(8)'s temporary
allowlist status. This status is required before the client can
talk to a Postfix SMTP server process.  By default, a client can
obtain postscreen(8)'s allowlist status on any local postscreen(8)
server IP address. 

 When postscreen(8) listens on both primary and backup MX
addresses, the postscreen_allowlist_interfaces parameter can be
configured to give the temporary allowlist status only when a client
connects to a primary MX address. Once a client is allowlisted it
can talk to a Postfix SMTP server on any address. Thus, clients
that connect only to backup MX addresses will never become allowlisted,
and will never be allowed to talk to a Postfix SMTP server process.


 Specify a list of network addresses or network/netmask patterns,
separated by commas and/or whitespace. The netmask specifies the
number of bits in the network part of a host address. Continue long
lines by starting the next line with whitespace. 

 You can also specify "/file/name" or "type:table" patterns.  A
"/file/name" pattern is replaced by its contents; a "type:table"
lookup table is matched when a table entry matches a lookup string
(the lookup result is ignored). 

 The list is matched left to right, and the search stops on the
first match. Specify "!pattern" to exclude an address or network
block from the list.  

 Note: IP version 6 address information must be specified inside
[] in the postscreen_allowlist_interfaces value, and in files
specified with "/file/name".  IP version 6 addresses contain the
":" character, and would otherwise be confused with a "type:table"
pattern. 

 Example: 


/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    # Don't allowlist connections to the backup IP address.
    # Postfix &lt; 3.6 use <a href="postconf.5.html#postscreen_whitelist_interfaces">postscreen_whitelist_interfaces</a>.
    <a href="postconf.5.html#postscreen_allowlist_interfaces">postscreen_allowlist_interfaces</a> = !168.100.189.8, <a href="DATABASE_README.html#types">static</a>:all


 This feature is available in Postfix 3.6 and later.  

 Available as postscreen_whitelist_interfaces in Postfix 2.9 - 3.5. 


