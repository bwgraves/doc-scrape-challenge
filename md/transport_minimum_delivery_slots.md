# transport_minimum_delivery_slots (default:$ 

 A transport-specific override for the default_minimum_delivery_slots
parameter value, where transport is the master.cf name of
the message delivery transport. 

 Note: transport_minimum_delivery_slots parameters will
not show up in "postconf" command output before Postfix version
2.9.  This limitation applies to many parameters whose name is a
combination of a master.cf service name and a built-in suffix (in
this case: "_minimum_delivery_slots"). 


