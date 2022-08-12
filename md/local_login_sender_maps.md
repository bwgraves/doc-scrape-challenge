# local_login_sender_maps (default:  A list of lookup tables that are searched by the UNIX login name,
and that return a list of allowed envelope sender patterns separated
by space or comma. These sender patterns are enforced by the Postfix
postdrop(1) command. The default is backwards-compatible:
every user may specify any sender envelope address. 