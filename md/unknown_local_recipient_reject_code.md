# unknown_local_recipient_reject_code 


The numerical Postfix SMTP server response code when a recipient
address is local, and $local_recipient_maps specifies a list of
lookup tables that does not match the recipient.  A recipient
address is local when its domain matches $mydestination,
$proxy_interfaces or $inet_interfaces.



The default setting is 550 (reject mail) but it is safer to initially
use 450 (try again later) so you have time to find out if your
local_recipient_maps settings are OK.



Example:



<a href="postconf.5.html#unknown_local_recipient_reject_code">unknown_local_recipient_reject_code</a> = 450



This feature is available in Postfix 2.0 and later.



