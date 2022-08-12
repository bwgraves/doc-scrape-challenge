# transport_recipient_limit (default:$; 

 A transport-specific override for the default_recipient_limit
parameter value, where transport is the master.cf name of
the message delivery transport. 

 Note: some transport_recipient_limit parameters will not
show up in "postconf" command output before Postfix version 2.9.
This limitation applies to many parameters whose name is a combination
of a master.cf service name and a built-in suffix (in this case:
"_recipient_limit"). 


