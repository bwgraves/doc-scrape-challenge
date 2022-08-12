# mailbox_transport (default:empty) 


Optional message delivery transport that the local(8) delivery
agent should use for mailbox delivery to all local recipients,
whether or not they are found in the UNIX passwd database.


 The precedence of local(8) delivery features from high to low
is: aliases, .forward files, mailbox_transport_maps, mailbox_transport,
mailbox_command_maps, mailbox_command, home_mailbox, mail_spool_directory,
fallback_transport_maps, fallback_transport and luser_relay.  


