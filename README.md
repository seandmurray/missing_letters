# Problem: ­Missing Letters

If you are using a machine with a bash shell (Linux/Mac) there is a *run.sh* in each project directory to make running a sample, simple.

"npm test" will run the local tests.

**All scripts/commands should be run from within the respective project directory!**

The sentence "A quick brown fox jumps over the lazy dog" contains every single letter in
the alphabet. Such sentences are called pangrams. You are to write a method
getMissingLetters, which takes as input a string containing a sentence and returns all
the letters not present at all in the sentence (i.e., the letters that prevent it from being a
pangram). You should ignore the case of the letters in sentence, and your return should
be all lower case letters, in alphabetical order. You should also ignore all non­alphabet
characters as well as all non­US­ASCII characters.

Imagine that the method you write will be called many thousands of times in rapid
succession on strings with length ranging from 0 to 50. Accordingly, you should try to
write code that runs as quickly as possible. Also, imagine the case when the input string
is quite large (e.g., tens of megabytes). See if you can develop an algorithm that
handles this case efficiently while still running very quickly on smaller inputs.

## Examples:

(Note that in the examples below, the double quotes should not be considered part of the input or output strings.)

```bash
0) "A quick brown fox jumps over the lazy dog"
Returns: ""
(This sentence contains every letter)

1) "A slow yellow fox crawls under the proactive dog"
Returns: "bjkmqz"

2) "Lions, and tigers, and bears, oh my!"
Returns: "cfjkpquvwxz"

3) ""
Returns: "abcdefghijklmnopqrstuvwxyz"
```
