# myorigin (default:$ 


The domain name that locally-posted mail appears to come
from, and that locally posted mail is delivered to. The default,
$myhostname, is adequate for small sites.  If you run a domain with
multiple machines, you should (1) change this to $mydomain and (2)
set up a domain-wide alias database that aliases each user to
user@that.users.mailhost.



Example:



<a href="postconf.5.html#myorigin">myorigin</a> = $<a href="postconf.5.html#mydomain">mydomain</a>



