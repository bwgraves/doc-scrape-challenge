# default_rbl_reply (default:see"postconf-d"output); 


The default Postfix SMTP server response template for a request that is
rejected by an RBL-based restriction. This template can be overruled
by specific entries in the optional rbl_reply_maps lookup table.



This feature is available in Postfix 2.0 and later.



The template does not support Postfix configuration parameter $name
substitution. Instead, it supports exactly one level of $name
substitution for the following attributes:




$client

The client hostname and IP address, formatted as name[address]. 

$client_address

The client IP address. 

$client_name

The client hostname or "unknown". See reject_unknown_client_hostname
for more details. 

$reverse_client_name

The client hostname from address-&gt;name lookup, or "unknown".
See reject_unknown_reverse_client_hostname for more details. 

$helo_name

The hostname given in HELO or EHLO command or empty string. 

$rbl_class

The denylisted entity type: Client host, Helo command, Sender
address, or Recipient address. 

$rbl_code

The numerical SMTP response code, as specified with the
maps_rbl_reject_code configuration parameter. Note: The numerical
SMTP response code is required, and must appear at the start of the
reply. With Postfix version 2.3 and later this information may be followed
by an RFC 3463 enhanced status code. 

$rbl_domain

The RBL domain where $rbl_what is denylisted. 

$rbl_reason

The reason why $rbl_what is denylisted, or an empty string. 

$rbl_what

The entity that is denylisted (an IP address, a hostname, a domain
name, or an email address whose domain was denylisted). 

$recipient

The recipient address or &lt;&gt; in case of the null address. 

$recipient_domain

The recipient domain or empty string. 

$recipient_name

The recipient address localpart or &lt;&gt; in case of null address. 

$sender

The sender address or &lt;&gt; in case of the null address. 

$sender_domain

The sender domain or empty string. 

$sender_name

The sender address localpart or &lt;&gt; in case of the null address. 

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


 Note: when an enhanced status code is specified in an RBL reply
template, it is subject to modification.  The following transformations
are needed when the same RBL reply template is used for client,
helo, sender, or recipient access restrictions.  



  When rejecting a sender address, the Postfix SMTP server
will transform a recipient DSN status (e.g., 4.1.1-4.1.6) into the
corresponding sender DSN status, and vice versa. 

  When rejecting non-address information (such as the HELO
command argument or the client hostname/address), the Postfix SMTP
server will transform a sender or recipient DSN status into a generic
non-address DSN status (e.g., 4.0.0).  




