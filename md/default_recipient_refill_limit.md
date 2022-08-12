# default_recipient_refill_limit 


The default per-transport limit on the number of recipients refilled at
once.  When not all message recipients fit into memory at once, keep
loading more of them in batches of at least this many at a time.  See also
$default_recipient_refill_delay, which may result in recipient batches
lower than this when this limit is too high for too slow deliveries.


 Use transport_recipient_refill_limit to specify a
transport-specific override, where transport is the master.cf
name of the message delivery transport.


 This feature is available in Postfix 2.4 and later. 

