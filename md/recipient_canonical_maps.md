# recipient_canonical_maps (default:empty); 


Optional address mapping lookup tables for envelope and header
recipient addresses.
The table format and lookups are documented in canonical(5).



Note: $recipient_canonical_maps is processed before $canonical_maps.



Example:



<a href="postconf.5.html#recipient_canonical_maps">recipient_canonical_maps</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/recipient_canonical



