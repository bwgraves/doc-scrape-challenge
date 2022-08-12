# virtual_mailbox_domains (default:$ 

 Postfix is the final destination for the specified list of domains;
mail is delivered via the $virtual_transport mail delivery transport.
By default this is the Postfix virtual(8) delivery agent.  The SMTP
server validates recipient addresses with $virtual_mailbox_maps
and rejects mail for non-existent recipients.  See also the virtual
mailbox domain class in the ADDRESS_CLASS_README file.  

 This parameter expects the same syntax as the mydestination
configuration parameter.  


This feature is available in Postfix 2.0 and later. The default
value is backwards compatible with Postfix version 1.1.



