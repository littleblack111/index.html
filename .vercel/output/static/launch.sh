function check() {
	printf '\033[0;35mCode Checking Starts...\033[0m\n'
	html5validator --also-check-css --also-check-svg --verbose | npx gnomon || printf '\033[0;31mCode Check Failed...\033[0m\n'
	# sleep .5
	echo
	htmltest --conf ./.htmltest.yml | npx gnomon || printf '\033[0;31mCode Check Failed...\033[0m\n'
	# sleep .5
}

function buildcss() {
	printf '\033[0;35mCode CSS Build Starts...\033[0m\n'
	yarn build:css || printf '\033[0;31mCode CSS Build Failed...\033[0m\n'
}

function buildjs() {
	printf '\033[0;35mCode JavaScript Compile Starts...\033[0m\n'
	yarn build:js || printf '\033[0;31mCode JavaScript Compile Failed...\033[0m\n'
}

function build() {
	printf '\033[0;35mStart Building/Compiling...\033[0m\]'
	yarn build || printf '\033[0;31mBuilding/Compiling Failed..\033[0m\n'
}

function watch() {
	printf '\033[0;35mStart Watching.. \033[0m\n'
	yarn watch || printf '\033[0;31mWatch Failed...\033[0m\n'
}

function start() {
	printf '\033[0;32mNpx Server Starting...\033[0m\n'
	exec npx serve -d -p 209 #| npx gnomon;
}

function main() {
	check
	build
	start
}

if [ "$1" ]; then
	$@
	exit 0
fi

main


