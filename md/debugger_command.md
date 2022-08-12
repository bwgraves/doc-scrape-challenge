# debugger_command (default:empty); 


The external command to execute when a Postfix daemon program is
invoked with the -D option.



Use "command .. &amp; sleep 5" so that the debugger can attach before
the process marches on. If you use an X-based debugger, be sure to
set up your XAUTHORITY environment variable before starting Postfix.



Note: the command is subject to $name expansion, before it is
passed to the default command interpreter. Specify "$$" to
produce a single "$" character.



Example:



<a href="postconf.5.html#debugger_command">debugger_command</a> =
    PATH=/usr/bin:/usr/X11R6/bin
    ddd $<a href="postconf.5.html#daemon_directory">daemon_directory</a>/$<a href="postconf.5.html#process_name">process_name</a> $<a href="postconf.5.html#process_id">process_id</a> &amp; sleep 5



