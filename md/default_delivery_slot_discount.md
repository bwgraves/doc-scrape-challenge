# default_delivery_slot_discount (default:50) 


The default value for transport-specific _delivery_slot_discount
settings.



This parameter speeds up the moment when a message preemption can
happen. Instead of waiting until the full amount of delivery slots
required is available, the preemption can happen when
transport_delivery_slot_discount percent of the required amount
plus transport_delivery_slot_loan still remains to be accumulated.
Note that the full amount will still have to be accumulated before
another preemption can take place later.


 Use transport_delivery_slot_discount to specify a
transport-specific override, where transport is the master.cf
name of the message delivery transport.



