# local_recipient_maps 

 Lookup tables with all names or addresses of local recipients:
a recipient address is local when its domain matches $mydestination,
$inet_interfaces or $proxy_interfaces.  Specify @domain as a
wild-card for domains that do not have a valid recipient list.
Technically, tables listed with $local_recipient_maps are used as
lists: Postfix needs to know only if a lookup string is found or
not, but it does not use the result from table lookup.  


Specify zero or more "type:name" lookup tables, separated by
whitespace or comma. Tables will be searched in the specified order
until a match is found.



If this parameter is non-empty (the default), then the Postfix SMTP
server will reject mail for unknown local users.



To turn off local recipient checking in the Postfix SMTP server,
specify "local_recipient_maps =" (i.e. empty).



The default setting assumes that you use the default Postfix local
delivery agent for local delivery. You need to update the
local_recipient_maps setting if:




You redefine the local delivery agent in master.cf.

You redefine the "local_transport" setting in main.cf.

You use the "luser_relay", "mailbox_transport", or "fallback_transport"
feature of the Postfix local(8) delivery agent.




Details are described in the LOCAL_RECIPIENT_README file.



Beware: if the Postfix SMTP server runs chrooted, you need to access
the passwd file via the proxymap(8) service, in order to overcome
chroot access restrictions. The alternative, maintaining a copy of
the system password file in the chroot jail is not practical.



Examples:



<a href="postconf.5.html#local_recipient_maps">local_recipient_maps</a> =



