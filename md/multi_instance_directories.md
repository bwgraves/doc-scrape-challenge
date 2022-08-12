# multi_instance_directories (default:empty) 

 An optional list of non-default Postfix configuration directories;
these directories belong to additional Postfix instances that share
the Postfix executable files and documentation with the default
Postfix instance, and that are started, stopped, etc., together
with the default Postfix instance.  Specify a list of pathnames
separated by comma or whitespace.  

 When $multi_instance_directories is empty, the postfix(1) command
runs in single-instance mode and operates on a single Postfix
instance only. Otherwise, the postfix(1) command runs in multi-instance
mode and invokes the multi-instance manager specified with the
multi_instance_wrapper parameter. The multi-instance manager in
turn executes postfix(1) commands for the default instance and for
all Postfix instances in $multi_instance_directories.  

 Currently, this parameter setting is ignored except for the
default main.cf file. 

 This feature is available in Postfix 2.6 and later. 


