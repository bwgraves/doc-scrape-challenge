# alias_database 


The alias databases for local(8) delivery that are updated with
"newaliases" or with "sendmail -bi".



This is a separate configuration parameter because not all the
tables specified with $alias_maps have to be local files.



Examples:



<a href="postconf.5.html#alias_database">alias_database</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/aliases
<a href="postconf.5.html#alias_database">alias_database</a> = <a href="DATABASE_README.html#types">hash</a>:/etc/mail/aliases



