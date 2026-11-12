# Particle in a 1-D & 3-D Box: Solving and Visualizing Wavefunctions

A compact, Streamlit-style educational dashboard for particle-in-a-box quantum chemistry. This is a Next.js application (not a standalone HTML file and not a Streamlit/Python app).

## Deploy to Vercel

1. Download and extract this ZIP.
2. Upload the **contents** of this folder to a GitHub repository (the `package.json` must be at the repository root).
3. In Vercel choose **Add New → Project**, import that GitHub repository, and click **Deploy**. Vercel should detect Next.js automatically.
4. No environment variables or database setup are required for this starter version.

## Run locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build`.

## Included

- Expandable, student-friendly 1D and 3D theory modules, with physical-model diagrams, boundary conditions, equation explanations, probability, normalization, nodes/nodal planes, degeneracy and worked examples
- 1D energy calculator, wavefunction and probability-density plot
- 3D rectangular-box energy calculator and central probability-density slice, with live interpretation of quantum numbers and nodal planes
- Energy analysis, guided experiments and 10-question self-assessment
- Print / Save as PDF lab report
- Local browser activity summary and JSON export

## Important limitations

This is an open-access teaching starter. Activity records are stored only in the current browser using localStorage. They are not centrally collected, and the Faculty tab is a local activity viewer, **not** an authenticated or secure faculty portal. Assessment scores are client-side self-assessment and must not be treated as verified exam marks. Do not collect sensitive student information in this starter.

For institution-wide student tracking, verified assessments, or a faculty-only dashboard, integrate a backend such as Supabase with server-side authorization, Row Level Security, rate limiting, and protected faculty roles. Do not put service-role keys or secrets in browser code.

## Scientific note

The 1D and 3D energies are calculated using SI constants and converted to eV. The plotted 1D curves show the correct state shapes; the probability curve is scaled for visual comparison. The 3D view is a central 2D slice of the probability density, not a full volumetric renderer. The expanded Theory tab explains this distinction and the current 3D state panel explains the central-slice behaviour, including why an even nᶻ gives a nodal central plane.
