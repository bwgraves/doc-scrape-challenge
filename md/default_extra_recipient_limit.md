# default_extra_recipient_limit 


The default value for the extra per-transport limit imposed on the
number of in-memory recipients.  This extra recipient space is
reserved for the cases when the Postfix queue manager's scheduler
preempts one message with another and suddenly needs some extra
recipient slots for the chosen message in order to avoid performance
degradation.


 Use transport_extra_recipient_limit to specify a
transport-specific override, where transport is the master.cf
name of the message delivery transport.



