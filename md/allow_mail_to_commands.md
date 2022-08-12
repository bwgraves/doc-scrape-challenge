# allow_mail_to_commands 


Restrict local(8) mail delivery to external commands.  The default
is to disallow delivery to "|command" in :include:  files (see
aliases(5) for the text that defines this terminology).



Specify zero or more of: alias, forward or include,
in order to allow commands in aliases(5), .forward files or in
:include:  files, respectively.



Example:



<a href="postconf.5.html#allow_mail_to_commands">allow_mail_to_commands</a> = alias,forward,include



