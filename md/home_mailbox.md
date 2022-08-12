# home_mailbox 


Optional pathname of a mailbox file relative to a local(8) user's
home directory.



Specify a pathname ending in "/" for qmail-style delivery.


 The precedence of local(8) delivery features from high to low
is: aliases, .forward files, mailbox_transport_maps, mailbox_transport,
mailbox_command_maps, mailbox_command, home_mailbox, mail_spool_directory,
fallback_transport_maps, fallback_transport and luser_relay.  


Examples:



<a href="postconf.5.html#home_mailbox">home_mailbox</a> = Mailbox
<a href="postconf.5.html#home_mailbox">home_mailbox</a> = Maildir/



