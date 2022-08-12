# smtpd_client_message_rate_limit 


The maximal number of message delivery requests that any client is
allowed to make to this service per time unit, regardless of whether
or not Postfix actually accepts those messages.  The time unit is
specified with the anvil_rate_time_unit configuration parameter.



By default, a client can send as many message delivery requests
per time unit as Postfix can accept.



To disable this feature, specify a limit of 0.



WARNING: The purpose of this feature is to limit abuse. It must
not be used to regulate legitimate mail traffic.



This feature is available in Postfix 2.2 and later.



Example:



<a href="postconf.5.html#smtpd_client_message_rate_limit">smtpd_client_message_rate_limit</a> = 1000


