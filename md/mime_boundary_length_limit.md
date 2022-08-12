# mime_boundary_length_limit (default:2048); 


The maximal length of MIME multipart boundary strings. The MIME
processor is unable to distinguish between boundary strings that
do not differ in the first $mime_boundary_length_limit characters.



This feature is available in Postfix 2.0 and later.



