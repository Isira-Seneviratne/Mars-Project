# Mars Project
This is the implementation of a website to handle internships for SLIIT (Sri Lanka Institute of Information Technology).

The following sections are intended for contributors to this repository only.

## Importing documents into MongoDB from a JSON file
Run the following command (the table will be automatically created if it does not exist):

`mongoimport -d db_SliitInternship --file path/to/file.json`

Alternatively, `--db` can be used instead of `-d`.

## Exporting documents from MongoDB to a JSON file
Run the following command:

`mongoexport -d db_SliitInternship -c Collection_name -o Collection_name.json`

Alternatively, `--collection` and `--output` can be used instead of `-c` and `-o` respectively.
