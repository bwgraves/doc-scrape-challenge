# transport_initial_destination_concurrency 

 A transport-specific override for the initial_destination_concurrency
parameter value, where transport is the master.cf name of
the message delivery transport. 

 Note: some transport_initial_destination_concurrency
parameters will not show up in "postconf" command output before
Postfix version 2.9.  This limitation applies to many parameters
whose name is a combination of a master.cf service name and a
built-in suffix (in this case: "_initial_destination_concurrency").


 This feature is available in Postfix 2.5 and later. 


