# transport_maps (default:empty); 


Optional lookup tables with mappings from recipient address to
(message delivery transport, next-hop destination).  See transport(5)
for details.



Specify zero or more "type:table" lookup tables, separated by
whitespace or comma. Tables will be searched in the specified order
until a match is found.  If you use this
feature with local files, run "postmap /etc/postfix/transport"
after making a change.  

 Pattern matching of domain names is controlled by the presence
or absence of "transport_maps" in the parent_domain_matches_subdomains
parameter value.  

 For safety reasons, as of Postfix 2.3 this feature does not
allow $number substitutions in regular expression maps. 


Examples:



<a href="postconf.5.html#transport_maps">transport_maps</a> = <a href="DATABASE_README.html#types">dbm</a>:/etc/postfix/transport
<a href="postconf.5.html#transport_maps">transport_maps</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/transport



