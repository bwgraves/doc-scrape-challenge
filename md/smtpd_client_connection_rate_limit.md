# smtpd_client_connection_rate_limit (default:0) 


The maximal number of connection attempts any client is allowed to
make to this service per time unit.  The time unit is specified
with the anvil_rate_time_unit configuration parameter.



By default, a client can make as many connections per time unit as
Postfix can accept.



To disable this feature, specify a limit of 0.



WARNING: The purpose of this feature is to limit abuse. It must
not be used to regulate legitimate mail traffic.



This feature is available in Postfix 2.2 and later.



Example:



<a href="postconf.5.html#smtpd_client_connection_rate_limit">smtpd_client_connection_rate_limit</a> = 1000



