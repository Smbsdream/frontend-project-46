install:
	npm ci

link:
	npm link

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --coverage

publish: 
	npm publish --dry-run

json-diff:
	gendiff  '__fixtures__/file1.json' '__fixtures__/file2.json'

yaml-diff:
	gendiff -f plain '__fixtures__/file1.yaml' '__fixtures__/file2.yml'