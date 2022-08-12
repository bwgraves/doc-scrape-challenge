# postscreen_dnsbl_action 

The action that postscreen(8) takes when a remote SMTP client's combined
DNSBL score is equal to or greater than a threshold (as defined
with the postscreen_dnsbl_sites and postscreen_dnsbl_threshold
parameters).  Specify one of the following: 



 ignore (default) 

 Ignore the failure of this test. Allow other tests to complete.
Repeat this test the next time the client connects.
This option is useful for testing and collecting statistics
without blocking mail. 

 enforce 

 Allow other tests to complete. Reject attempts to deliver mail
with a 550 SMTP reply, and log the helo/sender/recipient information.
Repeat this test the next time the client connects. 

 drop 

 Drop the connection immediately with a 521 SMTP reply. Repeat
this test the next time the client connects. 



 This feature is available in Postfix 2.8. 


