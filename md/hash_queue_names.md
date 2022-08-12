# hash_queue_names 


The names of queue directories that are split across multiple
subdirectory levels.


 Before Postfix version 2.2, the default list of hashed queues
was significantly larger. Claims about improvements in file system
technology suggest that hashing of the incoming and active queues
is no longer needed. Fewer hashed directories speed up the time
needed to restart Postfix. 


After changing the hash_queue_names or hash_queue_depth parameter,
execute the command "postfix reload".


