# Difference Generator

Difference Generator - package compares two configuration files (_.json_, _.yaml_ extensions) and shows a difference.

Possible output options:

- `"stylish"`: tree structure
- `"plain"`: plain text
- `"json"`: json string

## Installation

```bash
  $ git clone <your link>
  $ cd gendiff
  $ make install
  $ nmp link
```
## Usage

To call help use the flag -h or --help:

```
  gendiff -h
```

```
  Usage: gendiff [options] <filepath1> <filepath2>

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -f, --format <type>  output format (default: "stylish")
    -h, --help           display help for command
```

## Demo

[![asciicast](https://asciinema.org/a/nzVenDRTts9gL4c5fxfsZSKVH.svg)](https://asciinema.org/a/nzVenDRTts9gL4c5fxfsZSKVH)

## Running tests and linters

```
  make test
  make lint
```

## Badges

### GitHub Actions:

[![GitHub Actions](https://github.com/Smbsdream/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Smbsdream/frontend-project-46/actions/workflows/hexlet-check.yml)

### Code quality maintainability and test coverage:

[![Maintainability](https://api.codeclimate.com/v1/badges/79288441bac31cb1e4b4/maintainability)](https://codeclimate.com/github/Smbsdream/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/79288441bac31cb1e4b4/test_coverage)](https://codeclimate.com/github/Smbsdream/frontend-project-46/test_coverage)
