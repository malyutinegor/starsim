all: gulp

gulp:
	gulp

deps:
	npm i -g gulp-cli
	npm i

cm:
	coffee -w -b -c ./ &
	./moonw &
	sleep infinity