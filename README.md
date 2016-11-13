# chart-csv

Chart a comma separated list of numbers on a line-graph that can be
viewed in a web browser.

![chart](https://cloud.githubusercontent.com/assets/10602/20244560/99a7e1e4-a9ca-11e6-809f-0370491106ad.png)

[![Build status](https://travis-ci.org/watson/chart-csv.svg?branch=master)](https://travis-ci.org/watson/chart-csv)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

Install `chart-csv` globally:

```
npm install chart-csv  -g
```

## Usage

Pipe CSV data to the `chart-csv` application. The `chart-csv`
application will output HTML to STDOUT, so you probably want to redirect
the output to a file that you can open in your web browser:

```
cat data.csv | chart-csv > data.html
```

The CSV data is expected to be in the following format:

```csv
foo,bar,baz
22462464,10295296,5624728
22941696,10295296,6085280
23003136,10295296,6141496
23048192,10295296,6188480
```

Use as many columns as you like.

If the CSV data doesn't contain any headers in the first line, no legend
will be generated.

## License

MIT
