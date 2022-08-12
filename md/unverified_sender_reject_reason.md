# unverified_sender_reject_reason (default:empty) 

 The Postfix SMTP server's reply when rejecting mail with
reject_unverified_sender. Do not include the numeric SMTP reply
code or the enhanced status code. By default, the response includes
actual address verification details.

 Example: 


<a href="postconf.5.html#unverified_sender_reject_reason">unverified_sender_reject_reason</a> = Sender address lookup failed


 This feature is available in Postfix 2.6 and later. 


