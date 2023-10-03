echo '\033[0;35mCode Checking Starts...\033[0m'
html5validator --also-check-css --also-check-svg --verbose | npx gnomon || echo '\033[0;31mCode Check Failed...\033[0m'
# sleep .5
echo
htmltest --conf ./.htmltest.yml | npx gnomon
echo '\033[0;32mNpx Server Started...\033[0m'

exec npx serve #| npx gnomon;
