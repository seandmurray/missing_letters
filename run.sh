clear
echo
echo '0) "A quick brown fox jumps over the lazy dog"'
echo 'Returns:'
test=`node index.js A quick brown fox jumps over the lazy dog`
echo "\"$test\""
echo '(This sentence contains every letter)'

echo
echo '1) "A slow yellow fox crawls under the proactive dog"'
echo 'Returns:'
test=`node index.js A slow yellow fox crawls under the proactive dog`
echo "\"$test\""

echo
echo '2) "Lions, and tigers, and bears, oh my!"'
echo 'Returns:'
test=`node index.js Lions, and tigers, and bears, oh my!`
echo "\"$test\""

echo
echo '3) ""'
echo 'Returns:'
test=`node index.js ''`
echo "\"$test\""
