# transport_delivery_slot_cost 

 A transport-specific override for the default_delivery_slot_cost
parameter value, where transport is the master.cf name of
the message delivery transport. 

 Note: transport_delivery_slot_cost parameters will not
show up in "postconf" command output before Postfix version 2.9.
This limitation applies to many parameters whose name is a combination
of a master.cf service name and a built-in suffix (in this case:
"_delivery_slot_cost"). 


