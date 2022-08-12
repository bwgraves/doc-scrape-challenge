# parent_domain_matches_subdomains 


A list of Postfix features where the pattern "example.com" also
matches subdomains of example.com,
instead of requiring an explicit ".example.com" pattern.  This is
planned backwards compatibility:  eventually, all Postfix features
are expected to require explicit ".example.com" style patterns when
you really want to match subdomains.


 The following Postfix feature names are supported. 



 Postfix version 1.0 and later


debug_peer_list,
fast_flush_domains,
mynetworks,
permit_mx_backup_networks,
relay_domains,
transport_maps


 Postfix version 1.1 and later


qmqpd_authorized_clients,
smtpd_access_maps,


 Postfix version 2.8 and later 


postscreen_access_list


 Postfix version 3.0 and later 


smtpd_client_event_limit_exceptions





