# sender_dependent_default_transport_maps (default:empty); 

 A sender-dependent override for the global default_transport
parameter setting. The tables are searched by the envelope sender
address and @domain. A lookup result of DUNNO terminates the search
without overriding the global default_transport parameter setting.
This information is overruled with the transport(5) table. 


Specify zero or more "type:name" lookup tables, separated by
whitespace or comma. Tables will be searched in the specified order
until a match is found.


 Note: this overrides default_transport, not transport_maps, and
therefore the expected syntax is that of default_transport, not the
syntax of transport_maps.  Specifically, this does not support the
transport_maps syntax for null transport, null nexthop, or null
email addresses. 

 For safety reasons, this feature does not allow $number
substitutions in regular expression maps. 

 This feature is available in Postfix 2.7 and later.  


