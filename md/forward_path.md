# forward_path 

 The local(8) delivery agent search list for finding a .forward
file with user-specified delivery methods. The first file that is
found is used.  

 The forward_path value is not subject to Postfix configuration
parameter $name expansion. Instead, the following $name expansions
are done on forward_path before the search actually happens.
The result of $name expansion is
filtered with the character set that is specified with the
forward_expansion_filter parameter.  



$user

The recipient's username. 

$shell

The recipient's login shell pathname. 

$home

The recipient's home directory. 

$recipient

The full recipient address. 

$extension

The optional recipient address extension. 

$domain

The recipient domain. 

$local

The entire recipient localpart. 

$recipient_delimiter

The address extension delimiter that was found in the recipient
address (Postfix 2.11 and later), or the system-wide recipient
address extension delimiter (Postfix 2.10 and earlier). 

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



Examples:



<a href="postconf.5.html#forward_path">forward_path</a> = /var/forward/$user
<a href="postconf.5.html#forward_path">forward_path</a> =
    /var/forward/$user/.forward$<a href="postconf.5.html#recipient_delimiter">recipient_delimiter</a>$extension,
    /var/forward/$user/.forward



