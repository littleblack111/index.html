printf '\033[0;35mCode Checking Starts...\033[0m\n'
html5validator --also-check-css --also-check-svg --verbose | npx gnomon || printf '\033[0;31mCode Check Failed...\033[0m\n'
# sleep .5
echo
htmltest --conf ./.htmltest.yml | npx gnomon || printf '\033[0;31mCode Check Failed...\033[0m\n'
# sleep .5
printf '\033[0;32mNpx Server Starting...\033[0m\n'

exec npx serve -d -p 209 #| npx gnomon;
