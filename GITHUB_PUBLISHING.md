# GitHub publishing checklist

## Recommended upload content

Upload these files and folders:

```text
README.md
GITHUB_PUBLISHING.md
.gitignore
.nojekyll
requirements.txt
index.html
PoEM2026_Semantic_Enterprise_Knowledge_Graph_Idea.md
demo/
docs/
evaluation/
kg/
data/
```

Inside `data/`, only `data/samples/` should be public.

## Do not upload

Do not upload:

```text
data from ciderr/
data/external/
.local_pydeps/
.DS_Store
github_repo_ready/
```

## GitHub Pages

After pushing the repository to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save.

The demo URL will look like:

```text
https://USERNAME.github.io/REPOSITORY-NAME/demo/
```

Send that URL to collaborators together with:

```text
evaluation/expert_evaluation/expert_evaluation.csv
```
