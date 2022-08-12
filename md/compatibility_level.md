# compatibility_level (default:0) 

 A safety net that causes Postfix to run with backwards-compatible
default settings after an upgrade to a newer Postfix version. 

 With backwards compatibility turned on (the main.cf compatibility_level
value is less than the Postfix built-in value), Postfix looks for
settings that are left at their implicit default value, and logs a
message when a backwards-compatible default setting is required.




using backwards-compatible default setting <i>name=value</i>
    to [accept a specific client request]

using backwards-compatible default setting <i>name=value</i>
    to [enable specific Postfix behavior]



 See COMPATIBILITY_README for specific message details. If such
a message is logged in the context of a legitimate request, the
system administrator should make the backwards-compatible setting
permanent in main.cf or master.cf, for example: 



# <b>postconf</b> <i>name=value</i>
# <b>postfix reload</b>



 When no more backwards-compatible settings need to be made
permanent, the administrator should turn off backwards compatibility
by updating the compatibility_level setting in main.cf:



# <b>postconf <a href="postconf.5.html#compatibility_level">compatibility_level</a>=<i>N</i></b>
# <b>postfix reload</b>



 For N specify the number that is logged in your postfix(1)
warning message: 



warning: To disable backwards compatibility use "postconf
    <a href="postconf.5.html#compatibility_level">compatibility_level</a>=<i>N</i>" and "postfix reload"



 Starting with Postfix version 3.6, the compatibility level in
the above warning message is the Postfix version that introduced
the last incompatible change. The level is formatted as
major.minor.patch, where patch is usually omitted and
defaults to zero. Earlier compatibility levels are 0, 1 and 2. 

 NOTE: this also introduces support for the "&lt;level",
"&lt;=level", and other operators to compare compatibility levels.
With the standard operators "&lt;", "&lt;=", etc., compatibility
level "3.10" would be smaller than "3.9" which is undesirable. 

 This feature is available in Postfix 3.0 and later. 


