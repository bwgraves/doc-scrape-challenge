# default_recipient_limit 


The default per-transport upper limit on the number of in-memory
recipients.  These limits take priority over the global
qmgr_message_recipient_limit after the message has been assigned
to the respective transports.  See also default_extra_recipient_limit
and qmgr_message_recipient_minimum.


 Use transport_recipient_limit to specify a
transport-specific override, where transport is the master.cf
name of the message delivery transport.



