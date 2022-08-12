# fast_flush_domains (default:$ 


Optional list of destinations that are eligible for per-destination
logfiles with mail that is queued to those destinations.



By default, Postfix maintains "fast flush" logfiles only for
destinations that the Postfix SMTP server is willing to relay to
(i.e. the default is: "fast_flush_domains = $relay_domains"; see
the relay_domains parameter in the postconf(5) manual).


 Specify a list of hosts or domains, "/file/name" patterns or
"type:table" lookup tables, separated by commas and/or whitespace.
Continue long lines by starting the next line with whitespace. A
"/file/name" pattern is replaced by its contents; a "type:table"
lookup table is matched when the domain or its parent domain appears
as lookup key.  

 Pattern matching of domain names is controlled by the presence
or absence of "fast_flush_domains" in the parent_domain_matches_subdomains
parameter value.  


Specify "fast_flush_domains =" (i.e., empty) to disable the feature
altogether.



