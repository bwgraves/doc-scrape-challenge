# sender_canonical_maps (default:empty) 


Optional address mapping lookup tables for envelope and header
sender addresses.
The table format and lookups are documented in canonical(5).



Example: you want to rewrite the SENDER address "user@ugly.domain"
to "user@pretty.domain", while still being able to send mail to
the RECIPIENT address "user@ugly.domain".



Note: $sender_canonical_maps is processed before $canonical_maps.



Example:



<a href="postconf.5.html#sender_canonical_maps">sender_canonical_maps</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/postfix/sender_canonical



