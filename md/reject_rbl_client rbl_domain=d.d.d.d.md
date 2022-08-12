# reject_rbl_client rbl_domain=d.d.d.d undefined Reject the request when the reversed client network address is
listed with the A record "d.d.d.d" under rbl_domain
(Postfix version 2.1 and later only).  Each "d" is a number,
or a pattern inside "[]" that contains one or more ";"-separated
numbers or number..number ranges (Postfix version 2.8 and later).
If no "=d.d.d.d" is specified, reject the request when the
reversed client network address is listed with any A record under
rbl_domain. 
The maps_rbl_reject_code parameter specifies the response code for
rejected requests (default:  554), the default_rbl_reply  parameter
specifies the default server reply, and the rbl_reply_maps  parameter
specifies tables with server replies indexed by rbl_domain.
This feature is available in Postfix 2.0 and later.  