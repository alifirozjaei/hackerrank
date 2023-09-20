function contacts(queries) {
    const result = []; 
    
    class TrieNode {
        constructor() {
            this.children = {};
            this.counter = 0;
            this.isEnd = false;
        }
    }
    
    class Trie {
        constructor() {
            this.root = new TrieNode();
        }

        insert(word) {
            let node = this.root;
            for (let i = 0; i < word.length; i++) {
                if (!node.children[word[i]]) {
                    node.children[word[i]] = new TrieNode();
                }
                node = node.children[word[i]];
                node.counter++;
            }
            node.isEnd = true;
        }

        search(word) {
            let node = this.root;
            for (let i = 0; i < word.length; i++) {
                if (!node.children[word[i]]) {
                    return false;
                }
                node = node.children[word[i]];
            }
            return node.isEnd;
        }

        searchPrefix(word) {
            let node = this.root;
            for (let i = 0; i < word.length; i++) {
                if (!node.children[word[i]]) {
                    return 0;
                }
                node = node.children[word[i]];
            }
            return node.counter;
        }
    }
    
    const contactTrie = new Trie();
    
    
    queries.forEach(([op, name]) => {
        if(op == 'add'){
            contactTrie.insert(name);
        } else {
            result.push(contactTrie.searchPrefix(name));
        }
    }); 
    
    
    return result;
}
