# lmtp_destination_recipient_limit (default:$ 

 The maximal number of recipients per message for the lmtp
message delivery transport. This limit is enforced by the queue
manager. The message delivery transport name is the first field in
the entry in the master.cf file.  

 Setting this parameter to a value of 1 changes the meaning of
lmtp_destination_concurrency_limit from concurrency per domain into
concurrency per recipient.  


