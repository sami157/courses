# Deployment Guide

## Environment Variables for Vercel

When deploying to Vercel, make sure to set these environment variables in your Vercel project settings:

### Required Environment Variables

1. **MONGODB_URI**
   - Your MongoDB connection string
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/coachify`

2. **NEXTAUTH_URL**
   - Your production URL
   - Example: `https://courses-peach-seven.vercel.app`
   - ⚠️ **IMPORTANT**: Must match your actual Vercel deployment URL exactly

3. **NEXTAUTH_SECRET**
   - A random secret key for encrypting JWT tokens
   - Generate one using: `openssl rand -base64 32`
   - ⚠️ **IMPORTANT**: Must be the same value in all environments (dev, staging, production)

4. **AUTH_TRUST_HOST** (Optional but recommended for Vercel)
   - Set to `true` to trust the host header
   - This helps with Vercel deployments
   - Value: `true`

### Optional Environment Variables (for Google OAuth)

4. **GOOGLE_CLIENT_ID**
   - Your Google OAuth Client ID (if using Google login)

5. **GOOGLE_CLIENT_SECRET**
   - Your Google OAuth Client Secret (if using Google login)

## Environment Variable Summary

Add these in Vercel:
- `MONGODB_URI` = your MongoDB connection string
- `NEXTAUTH_URL` = `https://courses-peach-seven.vercel.app` (your actual URL)
- `NEXTAUTH_SECRET` = generate with `openssl rand -base64 32`
- `AUTH_TRUST_HOST` = `true` (recommended for Vercel)
- `GOOGLE_CLIENT_ID` = (optional, if using Google login)
- `GOOGLE_CLIENT_SECRET` = (optional, if using Google login)

## How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with its value
4. Make sure to select the correct **Environment** (Production, Preview, Development)
5. **Redeploy** your application after adding/updating environment variables

## Common Issues and Solutions

### Issue: Sessions not persisting after login

**Solution:**
- Ensure `NEXTAUTH_URL` is set correctly to your production URL (must match exactly)
- Ensure `NEXTAUTH_SECRET` is set and is the same across all environments
- Set `AUTH_TRUST_HOST=true` in Vercel environment variables
- Check that cookies are being set (check browser DevTools → Application → Cookies)
- Verify cookies are using `Secure` flag (should be true in production)

### Issue: Cannot access protected routes after login

**Solution:**
- Verify middleware is working correctly
- Check that the session token cookie is being set
- Ensure `NEXTAUTH_SECRET` is properly configured
- Clear browser cookies and try logging in again

### Issue: Redirect loops

**Solution:**
- Verify `NEXTAUTH_URL` matches your actual domain
- Check that the callback URL in your OAuth provider (if using Google) matches your domain
- Ensure middleware matcher is not blocking auth routes

## Testing After Deployment

1. Test login with mock credentials: `admin@coach.io` / `admin123`
2. Verify you can access protected routes (`/add-course`, `/add-teacher`)
3. Check that sessions persist after page refresh
4. Test logout functionality
5. Verify redirects work correctly

## Notes

- Set `AUTH_TRUST_HOST=true` environment variable in Vercel for proper host header trust
- Cookie settings are configured to use `secure: true` in production (HTTPS only)
- Session duration is set to 30 days
- All cookies use `sameSite: "lax"` for better compatibility
- The `NEXTAUTH_URL` must exactly match your Vercel deployment URL (including `https://`)