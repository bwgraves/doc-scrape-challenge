# mailbox_command (default:empty) 


Optional external command that the local(8) delivery agent should
use for mailbox delivery.  The command is run with the user ID and
the primary group ID privileges of the recipient.  Exception:
command delivery for root executes with $default_privs privileges.
This is not a problem, because 1) mail for root should always be
aliased to a real user and 2) don't log in as root, use "su" instead.



The following environment variables are exported to the command:




CLIENT_ADDRESS

Remote client network address. Available in Postfix version 2.2 and
later. 

CLIENT_HELO

Remote client EHLO command parameter. Available in Postfix version 2.2
and later.

CLIENT_HOSTNAME

Remote client hostname. Available in Postfix version 2.2 and later.


CLIENT_PROTOCOL

Remote client protocol. Available in Postfix version 2.2 and later.


DOMAIN

The domain part of the recipient address. 

EXTENSION

The optional address extension. 

HOME

The recipient home directory. 

LOCAL

The recipient address localpart. 

LOGNAME

The recipient's username. 

ORIGINAL_RECIPIENT

The entire recipient address, before any address rewriting or
aliasing.  

RECIPIENT

The full recipient address. 

SASL_METHOD

SASL authentication method specified in the remote client AUTH
command. Available in Postfix version 2.2 and later. 

SASL_SENDER

SASL sender address specified in the remote client MAIL FROM
command. Available in Postfix version 2.2 and later. 

SASL_USER

SASL username specified in the remote client AUTH command.
Available in Postfix version 2.2 and later.  

SENDER

The full sender address. 

SHELL

The recipient's login shell. 

USER

The recipient username. 




Unlike other Postfix configuration parameters, the mailbox_command
parameter is not subjected to $name substitutions. This is to make
it easier to specify shell syntax (see example below).



If you can, avoid shell meta characters because they will force
Postfix to run an expensive shell process. If you're delivering
via "procmail" then running a shell won't make a noticeable difference
in the total cost.



Note: if you use the mailbox_command feature to deliver mail
system-wide, you must set up an alias that forwards mail for root
to a real user.


 The precedence of local(8) delivery features from high to low
is: aliases, .forward files, mailbox_transport_maps, mailbox_transport,
mailbox_command_maps, mailbox_command, home_mailbox, mail_spool_directory,
fallback_transport_maps, fallback_transport and luser_relay.  


Examples:



<a href="postconf.5.html#mailbox_command">mailbox_command</a> = /some/where/procmail
<a href="postconf.5.html#mailbox_command">mailbox_command</a> = /some/where/procmail -a "$EXTENSION"
<a href="postconf.5.html#mailbox_command">mailbox_command</a> = /some/where/maildrop -d "$USER"
        -f "$SENDER" "$EXTENSION"



