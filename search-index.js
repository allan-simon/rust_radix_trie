var searchIndex = {};
searchIndex['radix_trie'] = {"items":[[0,"","radix_trie","",null,null],[11,"new","nibble_vec","Create an empty nibble vector.",0,{"inputs":[{"name":"nibblevec"}],"output":{"name":"nibblevec"}}],[11,"from_byte_vec","","Create a nibble vector from a vector of bytes.",0,{"inputs":[{"name":"nibblevec"},{"name":"vec"}],"output":{"name":"nibblevec"}}],[11,"len","","Get the number of elements stored in the vector.",0,{"inputs":[{"name":"nibblevec"}],"output":{"name":"usize"}}],[11,"get","","Fetch a single entry from the vector.",0,{"inputs":[{"name":"nibblevec"},{"name":"usize"}],"output":{"name":"u8"}}],[11,"push","","Add a single nibble to the vector.",0,null],[11,"split","","Split the vector into two parts.",0,{"inputs":[{"name":"nibblevec"},{"name":"usize"}],"output":{"name":"nibblevec"}}],[11,"join","","Append another nibble vector whilst consuming this vector.",0,{"inputs":[{"name":"nibblevec"},{"name":"nibblevec"}],"output":{"name":"nibblevec"}}],[11,"clone","","",0,{"inputs":[{"name":"nibblevec"}],"output":{"name":"nibblevec"}}],[11,"eq","","",0,{"inputs":[{"name":"nibblevec"},{"name":"nibblevec"}],"output":{"name":"bool"}}],[11,"eq","","",0,null],[11,"fmt","","",0,{"inputs":[{"name":"nibblevec"},{"name":"formatter"}],"output":{"name":"result"}}],[3,"NibbleVec","radix_trie","A data-structure for storing a sequence of 4-bit values.",null,null],[3,"Iter","","Iterator over the keys and values of a Trie.",null,null],[3,"Keys","","Iterator over the keys of a Trie.",null,null],[3,"Values","","Iterator over the values of a Trie.",null,null],[3,"Trie","","Data-structure for storing and querying string-like keys and associated values.",null,null],[11,"new","","",1,{"inputs":[{"name":"iter"},{"name":"trie"}],"output":{"name":"iter"}}],[11,"new","","",2,{"inputs":[{"name":"keys"},{"name":"iter"}],"output":{"name":"keys"}}],[11,"next","","",2,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"new","","",3,{"inputs":[{"name":"values"},{"name":"iter"}],"output":{"name":"values"}}],[11,"next","","",3,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"next","","",1,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[8,"TrieKey","","Trait for types which can be used to key a Radix Trie.",null,null],[10,"encode","","Encode a value as a vector of bytes.",4,{"inputs":[{"name":"triekey"}],"output":{"name":"vec"}}],[11,"fmt","","",5,{"inputs":[{"name":"trie"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create an empty Trie with no data.",5,{"inputs":[{"name":"trie"}],"output":{"name":"trie"}}],[11,"len","","Fetch the number of key-value pairs stored in the Trie.",5,{"inputs":[{"name":"trie"}],"output":{"name":"usize"}}],[11,"is_empty","","Determine if the Trie contains 0 key-value pairs.",5,{"inputs":[{"name":"trie"}],"output":{"name":"bool"}}],[11,"get","","Fetch a reference to the given key's corresponding value (if any).",5,{"inputs":[{"name":"trie"},{"name":"k"}],"output":{"name":"option"}}],[11,"get_mut","","Fetch a mutable reference to the given key's corresponding value (if any).",5,{"inputs":[{"name":"trie"},{"name":"k"}],"output":{"name":"option"}}],[11,"get_node","","Fetch a reference to the given key's corresponding node (if any).",5,{"inputs":[{"name":"trie"},{"name":"k"}],"output":{"name":"option"}}],[11,"get_node_mut","","Fetch a mutable reference to the given key's corresponding node (if any).",5,{"inputs":[{"name":"trie"},{"name":"k"}],"output":{"name":"option"}}],[11,"get_nearest_ancestor_node","","Fetch a reference to the closest ancestor node of the given key.",5,{"inputs":[{"name":"trie"},{"name":"k"}],"output":{"name":"option"}}],[11,"get_nearest_ancestor","","Fetch the closest ancestor *value* for a given key.",5,{"inputs":[{"name":"trie"},{"name":"k"}],"output":{"name":"option"}}],[11,"insert","","Insert the given key-value pair, returning any previous value associated with the key.",5,{"inputs":[{"name":"trie"},{"name":"k"},{"name":"v"}],"output":{"name":"option"}}],[11,"remove","","Remove and return the value associated with the given key.",5,{"inputs":[{"name":"trie"},{"name":"k"}],"output":{"name":"option"}}],[11,"iter","","Return an iterator over the keys and values of the Trie.",5,{"inputs":[{"name":"trie"}],"output":{"name":"iter"}}],[11,"keys","","Return an iterator over the keys of the Trie.",5,{"inputs":[{"name":"trie"}],"output":{"name":"keys"}}],[11,"values","","Return an iterator over the values of the Trie.",5,{"inputs":[{"name":"trie"}],"output":{"name":"values"}}]],"paths":[[3,"NibbleVec"],[3,"Iter"],[3,"Keys"],[3,"Values"],[8,"TrieKey"],[3,"Trie"]]};
initSearch(searchIndex);
