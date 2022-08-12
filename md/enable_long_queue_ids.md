# enable_long_queue_ids  Enable long, non-repeating, queue IDs (queue file names).  The
benefit of non-repeating names is simpler logfile analysis and
easier queue migration (there is no need to run "postsuper" to
change queue file names that don't match their message file inode
number).  