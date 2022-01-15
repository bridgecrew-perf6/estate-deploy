const siteUrl = "https://estate-deploy.vercel.app"

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/dashboard' },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/server-sitemap.xml`]
  },
  exclude: ["/login", "/dashboard", "/dashboard/*"]
}