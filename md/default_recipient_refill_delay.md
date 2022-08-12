# default_recipient_refill_delay 


The default per-transport maximum delay between refilling recipients.
When not all message recipients fit into memory at once, keep loading
more of them at least once every this many seconds.  This is used to
make sure the recipients are refilled in a timely manner even when
$default_recipient_refill_limit is too high for too slow deliveries.


 Use transport_recipient_refill_delay to specify a
transport-specific override, where transport is the master.cf
name of the message delivery transport.


 This feature is available in Postfix 2.4 and later. 

