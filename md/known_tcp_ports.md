# known_tcp_ports 

 Optional setting that avoids lookups in the services(5) database.
This feature was implemented to address inconsistencies in the name
of the port "465" service. The ABNF is:




known_tcp_ports = empty | name-to-port *("," name-to-port) 
name-to-port = 1*(service-name "=') port-number



 The comma is required. Whitespace is optional but it cannot appear
inside a service name or port number. 

 This feature is available in Postfix 3.6 and later. 


