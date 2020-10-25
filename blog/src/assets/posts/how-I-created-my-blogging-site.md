# How I created my personal blogging site

## Background

I had the idea of a personal blogging site in the back of my mind for years now. However, being home for the past 7 months (oh dear COVID-19) brought such ideas in the foreground. Here I am, explaining how I made my own personal blogging site.

## Personal vs Hosting services

You would be wondering, with some many third-party services to choose from, why do you have to go solo and build your own? I would agree with that idea. So many things you have to worry about if you are building such site solo. Anything from features, hosting, scalling, browser support, device (screen size) support and the list goes on and on. However, today, there are a lot of tools and servies that can help you go from 0 to 100 with very little time.
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
| Base project          | [Ngx Markdown Demo](https://jfcere.github.io/ngx-markdown/get-started) |

## Part One: Create project & wire services

### Create Project

`Github`: You can either create a new Github project, or fork [this](https://github.com/nichelia/blog) project.

`Google Cloud`: Sign in with your Google Account to the [developer console](http://console.cloud.google.com). On the top right corner, click create [New Project](https://console.cloud.google.com/projectselector2/home/dashboard). Give it a unique name/organisation. Make sure you [enable billing](https://console.cloud.google.com/billing) for this project.

`Google Analytics`: (optional) ToDo

`Slack`: (optional) ToDo

`Logging`: (optional) ToDo

`Firebase`: Sign in with your Google Account to the [developer console](https://console.firebase.google.com). Click the `Add Project` button. This will open a 3-step page. On step 1, choose the project we just created on the Google console from the dropdown list and continue. Confirm the billing plan (e.g. Blaze). On step 2, confirm the changes that will happen to your Google project once Firbase is integrated. On step 3, enable Google Analytics for your project and select your account created above on step 4. To confirm all, click `Add Firebase`!

### Wire Services

`Firestore`: From within the project select `Cloud Firestore` from left hand side menu. Click on create and choose a zone location (e.g. europe-west2). Make sure you select Local development for now.

`Firebase Hosting`: ToDo
