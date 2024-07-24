install:
	npm ci

lint:
	npx eslint .

test:
	npm test

publish: 
	npm publish --dry-run

json-diff:
	gendiff  '__fixtures__/file1.json' '__fixtures__/file2.json'

yml-diff:
	gendiff  '__fixtures__/file1.yml' '__fixtures__/file2.yml'