# AI Virtual Lab: Drug Toxicity Prediction
A separate Next.js application for GitHub + Vercel. Deploy with Vercel Root Directory set to `drug-toxicity-lab`.

## Features
- Tox21 public dataset workflow (12 binary assay endpoints).
- Faculty CSV upload workflow for SMILES and assay labels.
- Dataset validation, missing-label handling, and class-balance summary.
- Educational descriptor-based baseline classifier, evaluation metrics and probability visualization.
- Student SMILES exploration and downloadable report.
- Clear warning: in-vitro assay classification is not clinical drug-safety prediction.

## Dataset
Use the official NIH/NCATS Tox21 Challenge training files: https://tripod.nih.gov/tox21/challenge/data.jsp . The challenge labels are assay-specific (1=active, 0=inactive); untested/missing values must remain missing, not be converted to inactive.

## Faculty CSV format
Required columns: `smiles` and one or more assay columns with values 1, 0, or blank. Optional `compound_id` and `name`. For a teaching-friendly descriptor model, the CSV may instead include numeric descriptor columns such as MW, LogP, TPSA, HBD, HBA, RotB, AromaticRings, and HeavyAtoms, plus endpoint labels. The app never treats blank labels as negatives.

## Run locally
```bash
cd drug-toxicity-lab
npm install
npm run dev
```

## Deploy to Vercel
Import this GitHub repository, select the branch `feature/ai-drug-toxicity-virtual-lab`, and set **Root Directory** to `drug-toxicity-lab`. Framework: Next.js. Build command: `npm run build`.

## Scientific limitations
The browser-based demo uses transparent descriptor features and a logistic-regression baseline trained on the dataset loaded by the user. For research-grade work, curate structures, calculate validated RDKit descriptors/fingerprints, use scaffold-aware train/test splits, handle assay imbalance, report per-endpoint ROC-AUC/PR-AUC and confidence intervals, and externally validate. The app's educational output is not a medical recommendation.