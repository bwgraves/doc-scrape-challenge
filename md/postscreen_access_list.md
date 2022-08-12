# postscreen_access_list 

 Permanent allow/denylist for remote SMTP client IP addresses.
postscreen(8) searches this list immediately after a remote SMTP
client connects.  Specify a comma- or whitespace-separated list of
commands (in upper or lower case) or lookup tables. The search stops
upon the first command that fires for the client IP address. 



  permit_mynetworks    Allowlist the client and
terminate the search if the client IP address matches $mynetworks.
Do not subject the client to any before/after 220 greeting tests.
Pass the connection immediately to a Postfix SMTP server process.
 Pattern matching of domain names is controlled by the presence
or absence of "postscreen_access_list" in the
parent_domain_matches_subdomains parameter value. 

  type:table    Query the specified lookup
table. Each table lookup result is an access list, except that
access lists inside a table cannot specify type:table entries.  
To discourage the use of hash, btree, etc. tables, there is no
support for substring matching like smtpd(8). Use CIDR tables
instead.  

  permit    Allowlist the client and terminate
the search. Do not subject the client to any before/after 220
greeting tests. Pass the connection immediately to a Postfix SMTP
server process. 

  reject    Denylist the client and terminate
the search. Subject the client to the action configured with the
postscreen_denylist_action configuration parameter. 

  dunno    All postscreen(8) access lists
implicitly have this command at the end.  When  dunno 
is executed inside a lookup table, return from the lookup table and
evaluate the next command.   When  dunno  is executed
outside a lookup table, terminate the search, and subject the client
to the configured before/after 220 greeting tests. 



 Example: 


/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#postscreen_access_list">postscreen_access_list</a> = <a href="postconf.5.html#permit_mynetworks">permit_mynetworks</a>,
        <a href="cidr_table.5.html">cidr</a>:/etc/postfix/postscreen_access.cidr
    # Postfix &lt; 3.6 use <a href="postconf.5.html#postscreen_blacklist_action">postscreen_blacklist_action</a>.
    <a href="postconf.5.html#postscreen_denylist_action">postscreen_denylist_action</a> = enforce



/etc/postfix/postscreen_access.<a href="cidr_table.5.html">cidr</a>:
    # Rules are evaluated in the order as specified.
    # Denylist 192.168.* except 192.168.0.1.
    192.168.0.1         dunno
    192.168.0.0/16      reject


 This feature is available in Postfix 2.8. 


