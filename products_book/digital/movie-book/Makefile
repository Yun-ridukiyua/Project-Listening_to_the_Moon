NPM_RUN = npm run
DEVELOP = build-dev
PRODUCTION = build-pro

PORT = 3000
SERVE = serve -port=$(PORT)
SERVE_URL = http://localhost:$(PORT)
OPEN_APP = "Google Chrome"
#OPEN_APP = "Firefox"

DIST = dist
DOCS = ../../../docs
NODE_MODULES = node_modules

all:
	@

test:serve
	@

build:all
	$(NPM_RUN) $(DEVELOP)
	open -a $(OPEN_APP) $(DIST)/index.html

production:all
	$(NPM_RUN) $(PRODUCTION)

serve:all
	(sleep 5; open -a $(OPEN_APP) $(SERVE_URL)) & $(NPM_RUN) $(SERVE)

clean:
	@find . -name '.DS_Store' -exec rm -f {} ";"
	@rm -rf $(DIST)

wipe:clean
	@rm -rf $(NODE_MODULES)

prepare:all
	npm install

deploy:production
	cp -r $(DIST) $(DOCS)
	make clean
