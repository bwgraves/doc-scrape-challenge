# command_execution_directory (default:empty); 

 The local(8) delivery agent working directory for delivery to
external commands.  Failure to change directory causes the delivery
to be deferred. 

 The command_execution_directory value is not subject to Postfix
configuration parameter $name expansion. Instead, the following
$name expansions are done on command_execution_directory before the
directory is used. Expansion happens in the context
of the delivery request.  The result of $name expansion is filtered
with the character set that is specified with the
execution_directory_expansion_filter parameter.  



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


 This feature is available in Postfix 2.2 and later. 


