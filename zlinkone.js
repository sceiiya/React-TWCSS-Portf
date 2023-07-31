const root = document.getElementById('root')

const links = [
'https://www.google.com/search?q=is+it+possible+to+make+a+branch+in+git+repo+independent&oq=is+it+possible+to+make+a+branch+in+git+repo+ind&gs_lcrp=EgZjaHJvbWUqBwgCECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigAdIBCTE5MjMwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8',
'https://www.facebook.com/realiza.quiam.7',
'https://raulwebdev.com/',
'https://www.youtube.com/watch?v=w1H6LCvR61I',
'https://wise.com/',
'https://medium.com/@hwang74/how-to-implement-oauth-2-0-part-3-frontends-crazy-flows-and-redirects-17e71d637dd8',
'https://www.youtube.com/channel/UCvBx0aOygMuFVg4k7WrIzBw',
'https://www.youtube.com/watch?v=b3TOVBNSJDA',
'file:///C:/Users/meets/Downloads/FREE-Discovery-Call-Script-by-Shan-Ty.pdf',
'https://twitter.com/felutiahime',
'https://www.youtube.com/watch?v=lVpLoUecZYY&t=121s',
'https://answerthepublic.com/',
'https://frontendmasters.com/courses/modern-seo/',
'https://stefantopalovicdev.vercel.app/'
]

const linkTwo = [
'https://www.google.com/search?q=eycandy&sxsrf=AB5stBj2AHeU0btQ4wWUlQx_kET43_1Mkw%3A1689957178054&ei=OrO6ZOTyAvrWseMPrLaggAQ&ved=0ahUKEwjk96GKnaCAAxV6a2wGHSwbCEAQ4dUDCA8&uact=5&oq=eycandy&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2V5Y2FuZHkyDRAAGIAEGLEDGIMBGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyExAuGIAEGMcBGK8BGKYDGKgDGAoyBxAAGIAEGAoyExAuGIAEGMcBGK8BGKYDGKgDGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIug5QtwVYgAlwAXgAkAEAmAGhAaABrwKqAQMwLjK4AQPIAQD4AQHCAgoQABiABBiwAxgKwgIYEC4YigUYowMYqAMYyAMYsAMYChhD2AEBwgIWEC4YgAQYmgMYqAMYyAMYsAMYCtgBAcICGRAuGIAEGJgDGKgDGJoDGMgDGLADGArYAQHCAhkQLhiABBioAxiaAxiYAxjIAxiwAxgK2AEBwgINEC4YowMYqAMYgAQYCuIDBBgBIEGIBgGQBhS6BgYIARABGAg&sclient=gws-wiz-serp',
'https://joblu.io/',
'https://www.google.com/search?q=shopify+partnerds&oq=shopify+partnerds&aqs=chrome..69i57j0i131i433i512j0i512l8.4766j0j7&sourceid=chrome&ie=UTF-8',
'https://www.google.com/search?q=w3+cag+requirements&sxsrf=APwXEddQ6Nn5ogf8_12zrwhr1ywhR8Nz_w%3A1686380004978&ei=5B2EZMaGO7TVseMPsumf4AY&ved=0ahUKEwjGiJyJj7j_AhW0amwGHbL0B2wQ4dUDCA8&uact=5&oq=w3+cag+requirements&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQogQyBQgAEKIEOgoIABBHENYEELADSgQIQRgAUMYGWO4HYOIIaAFwAXgAgAGRAYgBkQGSAQMwLjGYAQCgAQHAAQHIAQg&sclient=gws-wiz-serp',
'https://www.w3.org/WAI/standards-guidelines/wcag/',
'https://docs.google.com/presentation/d/1uUYewra8B_eNEePt0gi2SKRbfpKXwd8IybiPo6yz4Ww/edit?fbclid=IwAR38TwsgjCXz08rME32p3p1e_bDjUFGQc5EZaLuWymNp1vOB18iU5_U-JpY#slide=id.g1d54d816614_1_1831',
'https://novelfree.ml/novel/Mushoku-Tensei',
'https://novelfree.ml/novel/Mushoku-Tensei/24003/Volume-11-Chapter-8--Elder-Brothers-Feelings.html',
'https://leetcode.com/discuss/interview-question/1726332/Microsoft-Online-Assessment-Questions/1241226',
'https://leetcode.com/discuss/interview-experience/3620665/All-my-Interviews-after-being-Laid-Off-oror-Sixth-Interview-oror-Flobiz-oror-BGR-oror-SDE-1',
'https://www.polywork.com/scaredmeow',
'https://linktr.ee/jordanbown'
]

const linkThree = [
'https://www.apple.com/ph/shop/buy-iphone/iphone-14-pro/6.1-inch-display-128gb-gold',
'https://www.samsung.com/ph/smartphones/galaxy-s23-ultra/specs/',
'https://www.facebook.com/watch/?ref=saved&v=501393882160430',
'https://docs.google.com/spreadsheets/d/17kQxtlyBzZODgRbSwIs4GA0Cn7vJ-Ak_IcLvaK8cAlQ/edit?fbclid=IwAR2N0Gx9HWtnCPn3z9y6njHMPne-715myBS2VoSKE6-tUpuMlzfNRyKcZsU#gid=0',
'https://www.zap.com.ph/careers',
'https://ttprocess.co/',
'https://www.mazecare.com/careers/',
'https://lxstudiolabs.io/',
'https://joblu.io/',
'https://invix.tech/',
'https://geco.asia/jobs-geco-asia/',
'https://247codecamp.com/',
'https://www.bimcap.com/',
'https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/363395898_269291192499205_95893975890363870_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=pdw6z0chfHwAX8tUW-9&_nc_ht=scontent.fmnl3-1.fna&_nc_e2o=f&oh=00_AfD7qa_62GeRCOmsIK9fpXU8uSJ9YMwS9Aufs04pfnh2Tw&oe=64C76A1F'
]

const linkFour = [
''
]

const html = links.map( link => `<a href="${link}">${link}</a><br/>`)
root.innerHTML= html;