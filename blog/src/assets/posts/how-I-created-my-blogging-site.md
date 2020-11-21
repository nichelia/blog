# How I created my personal blogging site

## Background

I had the idea of a personal blog site in the back of my mind for years now. However, being home for the past 7 months (oh dear COVID-19) brought such ideas in the foreground. Here I am, explaining how I made my own from scratch-ish.

## Personal vs Hosting services

You must be wondering, why do it from scratch since there are so many third-party options out there - personal favourite Medium.com. Truth is, such project requires time, thought and human hours to get it out. Nevermind the features, hosting, scalling, browser support, responsive design, the list goes on and on. However, none of such services can give you the design you want with the features you want, plus the knowledge you gained by doing it. Aim here is to make use of tools and servies of today, hopefully achieving a blog with very little time.
Below I will cover how I did that, and also the technology stack I chose.

## Technology Stack

| Technology            | Framework/Service                                                      |
| --------------------- | ---------------------------------------------------------------------- |
| Code version control  | [Github](https://github.com/nichelia/blog)                             |
| Cloud Provider        | [Google Cloud](http://console.cloud.google.com)                        |
| Analytics             | [Google Analytics](https://analytics.google.com)                       |
| Reporting             | Slack ToDo                                                             |
| Logging               | Google Logs ToDo                                                       |
| Domain                | [Google Domains](http://domains.google.com)                            |
| Peristence (database) | [Firestore](https://firebase.google.com/products/firestore)            |
| Hosting               | [Firebase Hosting](https://firebase.google.com/products/hosting)       |
| Web Framework         | [Angular](http://angular.io/)                                          |
| Local Development     | [Docker](http://docker.com)                                            |
| UI Framework          | [Google Material Design](http://material.angular.io)                   |
| Blog format           | [Markdown](https://daringfireball.net/projects/markdown/)              |
| Blog parser           | [ngx-markdown](https://github.com/jfcere/ngx-markdown)                 |

## Part One: Create project & wire services

### Create Project

`Github`: You can either create a new Github project, or fork [this](https://github.com/nichelia/blog) project.

`Google Cloud`: Sign in with your Google Account to the [developer console](http://console.cloud.google.com). On the top right corner, click create [New Project](https://console.cloud.google.com/projectselector2/home/dashboard). Give it a unique name/organisation. Make sure you [enable billing](https://console.cloud.google.com/billing) for this project.

`Google Analytics`: (optional) ToDo

`Slack`: (optional) ToDo

`Logging`: (optional) ToDo

`Firebase`: Sign in with your Google Account to the [developer console](https://console.firebase.google.com). Click the "Add Project" button. This will open a 3-step page. On step 1, choose the project we just created on the Google console from the dropdown list and continue. Confirm the billing plan (e.g. Blaze). On step 2, confirm the changes that will happen to your Google project once Firbase is integrated. On step 3, enable Google Analytics for your project and select your account created above on step 4. To confirm all, click `Add Firebase`!

### Wire Services

`Firestore`: From within the project select `Cloud Firestore` from left hand side menu. Click on create and choose a zone location (e.g. europe-west2). Make sure you select Local development for now.

`Firebase Hosting`: ToDo

## Resources

1. [Get to know Cloud Firestore Youtube Series](https://www.youtube.com/playlist?list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ)
2. [Firebase Official Documentation](https://firebase.google.com/docs)
3. [The top 10 things to know about Firestore when choosing a database for your app](https://medium.com/firebase-developers/the-top-10-things-to-know-about-firestore-when-choosing-a-database-for-your-app-a3b71b80d979)
