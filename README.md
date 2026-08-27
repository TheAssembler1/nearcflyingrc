# Northeast Aero RC Club website

This is the Jekyll site for Northeast Aero RC Club, built to run on GitHub Pages
at the custom domain nearcflyingtigers.com.

## Pages

- `index.md`, the home page
- `planes.md`, photos of member planes, pulled from `images/planes`
- `helis.md`, photos of member helicopters, pulled from `images/heli`
- `leaders.md`, the current club leaders

## Running the site on your own computer

You need Ruby and Bundler installed. Then from this folder run:

```
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000 in your browser. The page reloads when you save a file.

## Adding photos

Drop a jpg or png file into `images/planes` or `images/heli` and it shows up on
the matching page the next time the site builds. No other file needs to change.

## Updating the leaders

Edit `leaders.md` and change the names or roles listed there.

## Turning on GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to Settings then Pages.
3. Under Build and deployment, set the source to Deploy from a branch, and pick
   the `main` branch and the root folder.
4. Under Custom domain, enter `nearcflyingtigers.com` and save. GitHub reads
   this from the `CNAME` file already in this repo, so it should already be
   filled in.
5. Leave Enforce HTTPS off until the domain check below passes, then turn it on.

## Pointing nearcflyingtigers.com at GitHub Pages from GoDaddy

Use DNS records, not GoDaddy domain forwarding. Forwarding just redirects
visitors and changes the address bar to a GoDaddy page, and GitHub cannot issue
a proper HTTPS certificate for a forwarded domain. DNS records let the domain
serve the site directly with your own address staying in the bar.

1. Log into GoDaddy and open the DNS settings for nearcflyingtigers.com.
2. Remove any existing forwarding or parking record for the domain.
3. Add four A records, all for the root domain (usually shown as `@`), pointing
   to these GitHub Pages addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
4. If you also want www.nearcflyingtigers.com to work, add a CNAME record with
   host `www` pointing to your GitHub username followed by `.github.io`.
5. DNS changes can take anywhere from a few minutes to a day to take effect.
   Once GitHub shows the domain as verified on the Pages settings page, turn on
   Enforce HTTPS.

## Other club links

- Facebook group: https://www.facebook.com/groups/1447543095514131/
- AMA club page: https://www.modelaircraft.org/club/northeast-aero-rc-club
