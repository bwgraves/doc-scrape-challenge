# relocated_maps (default:empty) 


Optional lookup tables with new contact information for users or
domains that no longer exist.  The table format and lookups are
documented in relocated(5).



Specify zero or more "type:name" lookup tables, separated by
whitespace or comma. Tables will be searched in the specified order
until a match is found.



If you use this feature, run "postmap /etc/postfix/relocated" to
build the necessary DBM or DB file after change, then "postfix
reload" to make the changes visible.



Examples:



<a href="postconf.5.html#relocated_maps">relocated_maps</a> = <a href="DATABASE_README.html#types">dbm</a>:/etc/postfix/relocated
<a href="postconf.5.html#relocated_maps">relocated_maps</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/relocated



