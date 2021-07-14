.DEFAULT_GOAL:=help
SHELL:=/bin/bash

.PHONY: help install start test

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-11s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

install:  ## Checks and installs dependencies
	$(info Checking and getting dependencies)
	@docker-compose run --rm frontend npm install

start: ## Starts the development server
	$(info Starting the development server)
	@docker-compose run --rm --service-ports frontend

test: ## Starts the end to end test runner
	$(info Running test)
	@docker-compose up  --no-log-prefix --abort-on-container-exit --exit-code-from e2e