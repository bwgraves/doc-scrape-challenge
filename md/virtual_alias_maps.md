# virtual_alias_maps (default:$; 


Optional lookup tables that alias specific mail addresses or domains
to other local or remote addresses.  The table format and lookups
are documented in virtual(5). For an overview of Postfix address
manipulations see the ADDRESS_REWRITING_README document.



This feature is available in Postfix 2.0 and later. The default
value is backwards compatible with Postfix version 1.1.



Specify zero or more "type:name" lookup tables, separated by
whitespace or comma. Tables will be searched in the specified order
until a match is found.
Note: these lookups are recursive.



If you use this feature with indexed files, run "postmap
/etc/postfix/virtual" after changing the file.



Examples:



<a href="postconf.5.html#virtual_alias_maps">virtual_alias_maps</a> = <a href="DATABASE_README.html#types">dbm</a>:/etc/postfix/virtual
<a href="postconf.5.html#virtual_alias_maps">virtual_alias_maps</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/virtual



