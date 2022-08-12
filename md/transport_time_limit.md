# transport_time_limit (default:$ 

 A transport-specific override for the command_time_limit parameter
value, where transport is the master.cf name of the message
delivery transport. 

 Specify a non-zero time value (an integral value plus an optional
one-letter suffix that specifies the time unit).  Time units: s
(seconds), m (minutes), h (hours), d (days), w (weeks).
The default time unit is s (seconds).  

 Note: transport_time_limit parameters will not show up
in "postconf" command output before Postfix version 2.9.  This
limitation applies to many parameters whose name is a combination
of a master.cf service name and a built-in suffix (in this case:
"_time_limit"). 


