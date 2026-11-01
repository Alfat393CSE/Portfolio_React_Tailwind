# Deploy Alfat's portfolio to Vercel

This folder is a self-contained deployment copy of the portfolio. It includes its own source, assets, package lock, and Vercel configuration. No files outside this folder are required. Edit `deployed/src/` for future deployment changes; edits to the original root `src/` do not automatically update this copy.

## Deploy using GitHub and the Vercel dashboard

1. Create a GitHub repository for the portfolio.
2. Upload or commit the project, including this entire `deployed` folder. Do not upload `node_modules`, `.npm-cache`, `dist`, or local `.env` files. Keep the supplied `.gitignore`.
3. Sign in at https://vercel.com with your GitHub account.
4. Select **Add New → Project**, find the repository, and choose **Import**. Allow Vercel access to the repository if requested.
5. Set **Root Directory** to `deployed`. If you uploaded only the contents of this folder as the repository root, leave Root Directory as `.` instead.
6. Confirm these settings:

   | Setting | Value |
   | --- | --- |
   | Framework Preset | Vite |
   | Install Command | `npm ci` |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Node.js Version | 22.x |

7. No environment variables are required for the default contact form. Leave `VITE_CONTACT_ENDPOINT` unset unless you are using a different form service. Never add private service keys to `VITE_` variables.
8. Click **Deploy** and wait for the build to finish.
9. Open the deployment URL shown by Vercel. Check the portrait, CV download, theme switch, mobile navigation, project filters, and a project detail page. Refresh a detail page such as `/#/projects/jmds` to verify navigation.
10. Submit a contact message. If FormSubmit has not been activated, open its confirmation email at `alfattasnimhasan@gmail.com` and confirm the address. Check spam if needed. Submit again after activation and verify the message arrives. This confirmation is separate from deploying the site.

## Future updates

Edit the files inside this folder, commit, and push to your configured production branch. Vercel creates a new deployment from the connected Git repository. If you change environment variables, redeploy so Vite includes the updated values.

## Optional: deploy from the command line

Open PowerShell in the original project folder:

```powershell
cd deployed
npm ci
npm run build
npx vercel
```

Sign in when prompted, select your Vercel account, create a project, and use `.` as the directory. This command creates a preview deployment. To publish to production:

```powershell
npx vercel --prod
```

Do not use `vercel --prebuilt`: the ordinary Vite `dist` folder is not Vercel's Build Output API directory.

## Local preview

```powershell
cd deployed
npm ci
npm run dev
```

For a production preview, run `npm run build` followed by `npm run preview`. The site uses hash routing, so no catch-all rewrite is required.

## Troubleshooting

- **Build cannot find package.json:** confirm Root Directory is `deployed` when the full parent project is uploaded.
- **Missing assets:** commit `deployed/src/assets/`, including the portrait and CV.
- **Contact email does not arrive:** confirm FormSubmit activation and check spam. The site cannot verify inbox delivery independently.
- **Changes do not appear:** check that you edited `deployed/src/` and pushed to the branch connected to production.

Official documentation: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Deploying to Vercel](https://vercel.com/docs/deployments).
