# relay_domains (default:Postfix&ge;3.0:empty,Postfix&lt;3.0:$ 

 What destination domains (and subdomains thereof) this system
will relay mail to. For details about how
the relay_domains value is used, see the description of the
permit_auth_destination and reject_unauth_destination SMTP recipient
restrictions.  

 Domains that match $relay_domains are delivered with the
$relay_transport mail delivery transport. The SMTP server validates
recipient addresses with $relay_recipient_maps and rejects non-existent
recipients. See also the relay domains address class in the
ADDRESS_CLASS_README file.  

 Note: Postfix will not automatically forward mail for domains
that list this system as their primary or backup MX host. See the
permit_mx_backup restriction in the postconf(5) manual page.  

 Specify a list of host or domain names, "/file/name" patterns
or "type:table" lookup tables, separated by commas and/or whitespace.
Continue long lines by starting the next line with whitespace. A
"/file/name" pattern is replaced by its contents; a "type:table"
lookup table is matched when a (parent) domain appears as lookup
key. Specify "!pattern" to exclude a domain from the list. The form
"!/file/name" is supported only in Postfix version 2.4 and later.


 Pattern matching of domain names is controlled by the presence
or absence of "relay_domains" in the parent_domain_matches_subdomains
parameter value. 


