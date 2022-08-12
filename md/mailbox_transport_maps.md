# mailbox_transport_maps (default:empty); 

 Optional lookup tables with per-recipient message delivery
transports to use for local(8) mailbox delivery, whether or not the
recipients are found in the UNIX passwd database. 

 The precedence of local(8) delivery features from high to low
is: aliases, .forward files, mailbox_transport_maps, mailbox_transport,
mailbox_command_maps, mailbox_command, home_mailbox, mail_spool_directory,
fallback_transport_maps, fallback_transport and luser_relay.  


Specify zero or more "type:name" lookup tables, separated by
whitespace or comma. Tables will be searched in the specified order
until a match is found.


 For safety reasons, this feature does not allow $number
substitutions in regular expression maps. 

 This feature is available in Postfix 2.3 and later. 


