# transport_destination_rate_delay (default:$ 

 A transport-specific override for the default_destination_rate_delay
parameter value, where transport is the master.cf name of
the message delivery transport. 

 Note: some transport_destination_rate_delay parameters
will not show up in "postconf" command output before Postfix version
2.9.  This limitation applies to many parameters whose name is a
combination of a master.cf service name and a built-in suffix (in
this case: "_destination_rate_delay"). 

 This feature is available in Postfix 2.5 and later. 


