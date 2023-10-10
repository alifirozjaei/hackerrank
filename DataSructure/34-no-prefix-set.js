function noPrefix(words) {
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
                if (node.isEnd || (i == word.length - 1 && node.counter > 0) ) {
                    return true;
                }
                node.counter++;
            }
            node.isEnd = true;
            return false;
        }
    }

    const wordsTrie = new Trie();
    let isBad = false;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        isBad = wordsTrie.insert(word);
        if (isBad) {
            console.log("BAD SET");
            console.log(word);
            break;
        }
    }

    if (!isBad) {
        console.log("GOOD SET");
    }

}
