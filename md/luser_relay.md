# luser_relay 


Optional catch-all destination for unknown local(8) recipients.
By default, mail for unknown recipients in domains that match
$mydestination, $inet_interfaces or $proxy_interfaces is returned
as undeliverable.



The luser_relay value is not subject to Postfix configuration
parameter $name expansion. Instead, the following $name expansions
are done:




$domain

The recipient domain. 

$extension

The recipient address extension. 

$home

The recipient's home directory. 

$local

The entire recipient address localpart. 

$recipient

The full recipient address. 

$recipient_delimiter

The address extension delimiter that was found in the recipient
address (Postfix 2.11 and later), or the system-wide recipient
address extension delimiter (Postfix 2.10 and earlier). 

$shell

The recipient's login shell. 

$user

The recipient username. 

${name?value}

${name?{value}} (Postfix &ge; 3.0)

Expands to value when $name is non-empty. 

${name:value}

${name:{value}} (Postfix &ge; 3.0)

Expands to value when $name is empty. 

${name?{value1}:{value2}} (Postfix &ge; 3.0)

Expands to value1 when $name is non-empty,
value2 otherwise. 




Instead of $name you can also specify ${name} or $(name).



Note: luser_relay works only for the Postfix local(8) delivery agent.



Note: if you use this feature for accounts not in the UNIX password
file, then you must specify "local_recipient_maps =" (i.e. empty)
in the main.cf file, otherwise the Postfix SMTP server will reject mail
for non-UNIX accounts with "User unknown in local recipient table".



Examples:



<a href="postconf.5.html#luser_relay">luser_relay</a> = $user@other.host
<a href="postconf.5.html#luser_relay">luser_relay</a> = $local@other.host
<a href="postconf.5.html#luser_relay">luser_relay</a> = admin+$local



